<template>
	<view class="forget">
    <view class="tc p20">
      <image src="@/static/image/logo.png" style="width: 260rpx; height: 346rpx"></image>
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
					<text>短信验证：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" type="text" v-model="editForm.code" maxlength="6"></uni-easyinput>
				<button v-if="!smsLoading" class="sendSMS" type="default" @click="sendSms">发送验证码</button>
				<button v-else class="sendSMS" type="default" :disabled="true">{{ smsTime }}秒后重发</button>
			</view>
			<view class="registerItem">
				<view class="registerItemLabel">
					<text class="three">新密码：</text>
				</view>
				<uni-easyinput class="registerItemInput" :inputBorder="false" :maxlength="13" placeholder="6-13位数字和字母" type="password" v-model="editForm.password"></uni-easyinput>
			</view>
			<view class="uni-btn-v">
				<button @click="forgetPassword">立即修改</button>
			</view>
		</view>
		<view class="bottom">
			<navigator url="/pages/user/login">登录</navigator>
		</view>
	</view>
</template>

<script>
import { forgetPassword, sendSms } from '@/static/api/api'
export default {
  data () {
    return {
      editForm: {
        phone: '',
        code: '',
        password: ''
      },
      smsLoading: false,
      smsTime: 59,
      smsTimeout: null
    }
  },
  methods: {
    forgetPassword () {
      if (!/^1\d{10}$/.test(this.editForm.phone)) {
        uni.showToast({title: '请输入正确的手机号码', icon: 'none'})
        return
      }
      if (!/^\d{6}$/.test(this.editForm.code)) {
        uni.showToast({title: '请输入正确的短信验证码', icon: 'none'})
        return
      }
      if (this.editForm.password.length < 6) {
        uni.showToast({title: '请输入正确的密码', icon: 'none'})
        return
      }
      forgetPassword(this.editForm).then(res => {
        uni.showModal({
          title: '提示',
          content: '修改成功',
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
      sendSms({
        business_type: 'USER_FORGET_PASSWORD_CODE',
        phone: this.editForm.phone,
        area_code: 'CHINA'
      }).then(res => {
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
  }
}
</script>

<style lang="less" scoped>
	.forget {
		box-sizing: border-box;
		min-height: calc(100vh - 88rpx);
		padding: 24rpx 36rpx;
		background: #f0f0f0;
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
					width: 100%;
					height: 106rpx;
          color: #BA682E;
          background: linear-gradient(#F5D0B5, #E7B08F);
					border-radius: 18rpx;
					line-height: 106rpx;
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
