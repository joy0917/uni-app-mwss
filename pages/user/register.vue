<template>
	<view class="register">
    <!-- <view class="tc p20">
      <image src="@/static/image/logo.png" style="width: 260rpx; height: 346rpx"></image>
    </view> -->
    <view class="logintab">
      <view class="tabitem"><navigator url="/pages/user/login">登录</navigator></view>
      <view class="tabitem active">注册</view>
    </view>
		<view class="registerForm">
			<view class="registerItem">
				<view class="registerItemLabel">
					<text>手机号码：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" :maxlength="11" placeholder="请输入手机号码" type="text" v-model="editForm.phone"></uni-easyinput>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text>您的密码：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" :maxlength="13" placeholder="6-13位数字和字母" type="password" v-model="editForm.password"></uni-easyinput>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text>确认密码：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" :maxlength="13" placeholder="6-13位数字和字母" type="password" v-model="editForm.repassword"></uni-easyinput>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text class="three">验证码：</text>
				</view>
				<uni-easyinput class="registerItemInput" :maxlength="4" :inputBorder="false" type="text" v-model="graphicalCAPTCHA"></uni-easyinput>
				<image class="img" :src="imageData" @click="createGraphCode"></image>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text>短信验证：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" type="text" v-model="editForm.code" maxlength="6"></uni-easyinput>
				<button v-if="!smsLoading" class="sendSMS" type="default" @click="sendSms">发送验证码</button>
				<button v-else class="sendSMS" type="default" :disabled="true">{{ smsTime }}秒后重发</button>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text class="three">推荐码：</text>
				</view>
				<uni-easyinput class="registerItemInput" placeholder="推荐码" :inputBorder="false" type="text" v-model="editForm.recommend_by"></uni-easyinput>
			</view>
			<view class="registerAgreement">
				<uni-data-checkbox multiple wrap selectedTextColor="black" v-model="value" :localdata="range"></uni-data-checkbox>
				<navigator url="/pages/user/agreement">《用户协议》</navigator>
				<navigator url="/pages/user/privacy" style="left: 406rpx">《隐私协议》</navigator>
			</view>
			<view class="uni-btn-v">
				<button @click="register">立即注册</button>
			</view>
		</view>
		<!-- <view class="bottom">
			<navigator url="/pages/user/forget">忘记密码</navigator>
			<navigator url="/pages/user/login">登录</navigator>
		</view> -->
	</view>
</template>

<script>
import generateCode from '@/static/libs/canvas-verification-code'
import { register, sendSms, registerVisit } from '@/static/api/api'
export default {
  data () {
    return {
      editForm: {
        phone: '',
        password: '',
        repassword: '',
        code: '',
        recommend_by: '',
        channel_code: ''
      },
      graphicalCAPTCHA: '', // 输入的图形验证码
      imageData: '', // 生成的图形验证码
      codeText: '', // 图形验证码校验值
      smsLoading: false,
      smsTime: 59,
      smsTimeout: null,
      value: [],
      range: [
        {"value": 1,"text": "我已阅读并同意"}
      ]
    }
  },
	computed: {
		channel_code () {
			return this.$store.state.user.user_channel_code || ''
		}
	},
  methods: {
    createGraphCode () { // 创建图形验证码
      const { code, data } = generateCode(86, 50)
      this.imageData = data
      this.codeText = code
    },
		registerVisit () {
			registerVisit({ channel_code: this.channel_code })
    },
    register () {
      if (!/^1\d{10}$/.test(this.editForm.phone)) {
        uni.showToast({title: '请输入正确的手机号码', icon: 'none'})
        return
      }
      if (this.editForm.password.length < 6) {
        uni.showToast({title: '请输入正确的密码', icon: 'none'})
        return
      }
      if (this.editForm.repassword !== this.editForm.password) {
        uni.showToast({title: '两次密码不匹配', icon: 'none'})
        return
      }
      if (this.graphicalCAPTCHA.toLowerCase() !== this.codeText) {
        uni.showToast({title: '请输入图形验证码，不区分大小写', icon: 'none'})
        return
      }
      if (!/^\d{6}$/.test(this.editForm.code)) {
        uni.showToast({title: '请输入正确的短信验证码', icon: 'none'})
        return
      }
      if (this.value.length < 1) {
        uni.showToast({title: '请阅读并同意协议', icon: 'none'})
        return
      }
      register({
        ...this.editForm,
        channel_code: this.channel_code
      }).then(res => {
        uni.showModal({
          title: '提示',
          content: '注册成功',
          showCancel: false,
          success: () => {
            uni.navigateTo({
              url: '/pages/user/login'
            })
          }
        })
      })
    },
    sendSms () {
      if (!/^1\d{10}$/.test(this.editForm.phone)) {
        uni.showToast({title: '请输入正确的手机号码', icon: 'none'})
        return
      }
      if (this.graphicalCAPTCHA.toLowerCase() !== this.codeText) {
        uni.showToast({title: '请输入图形验证码，不区分大小写', icon: 'none'})
        return
      }
      sendSms({ business_type: 'USER_REGISTER_VERIFICATION_CODE', phone: this.editForm.phone, area_code: 'CHINA' }).then(res => {
        this.smsLoading = true
        this.smsTimeout = setInterval(() => {
          this.smsTime--
          if (this.smsTime === 0) {
            this.smsTime = 60
            this.smsLoading = false
            clearInterval(this.smsTimeout)
          }
        }, 1000)
      })
    }
  },
  mounted () {
    this.createGraphCode()
    this.registerVisit()
    console.log('渠道编码', this.channel_code)
  }
}
</script>

<style scoped lang="less">
	.register {
		box-sizing: border-box;
		padding: 24rpx 36rpx;
		background: #fff;
    .logintab{
      width: 60%;
      margin: 32px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .tabitem{
        text-align: center;
        padding: 8px 0;
        width: 50%;
        color: #bbb;
        font-size: 20px;
        &.active{
          color: #222;
          border-bottom: 2px solid #222
        }
      }
    }
		.registerForm {
			.registerItem {
				background: #F6F6F6;
				border-radius: 18rpx;
				height: 108rpx;
				box-sizing: border-box;
				padding: 0 40rpx;
				line-height: 108rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 40rpx;
				position: relative;
				.registerItemLabel {
					width: 172rpx;
					text {
						font-size: 28rpx;
					}
				}
				.three {
					letter-spacing:0.33em;
				}
				.registerItemInput {
					width: calc(100% - 172rpx);
					* {
						border: none;
					}
				}
				.img {
					position: absolute;
					width: 86rpx;
					height: 50rpx;
					right: 30rpx;
					border-radius: 8rpx;
					overflow: hidden;
					display: block;
				}
				.sendSMS {
					position: absolute;
					font-size: 24rpx;
					right: 30rpx;
					color: #D3B374;
					&::after {
						border-color: #D3B374;
					}
				}
				.sendSMS[disabled][type=default] {
					color: rgba(0,0,0,.3);
					background-color: #f7f7f7;
					&::after {
						border-color: rgba(0,0,0,.3);
					}
				}
			}
			.uni-btn-v {
				button {
					width: 80%;
					height: 70rpx;
					line-height: 70rpx;
          color: #BA682E;
          background: linear-gradient(#F5D0B5, #E7B08F);
					border-radius: 10rpx;
					font-size: 32rpx;
					font-weight: 500;
					text-align: center;
				}
			}
			.registerAgreement {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 28rpx;
				margin-top: 0;
				margin-bottom: 30rpx;
				position: relative;
				&:first-child {
					margin-top: 40rpx;
					margin-bottom: 20rpx;
				}
				checkbox {
					transform:scale(0.5)
				}
				navigator {
					color: rgb(0, 122, 255);
					position: absolute; bottom: 8rpx; left: 238rpx;
				}
			}
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 28rpx;
			font-size: 25rpx;
			navigator {
				text-decoration: underline;
			}
		}
	}
</style>
