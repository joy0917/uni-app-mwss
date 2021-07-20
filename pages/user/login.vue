<template>
	<view class="login">
    <view class="tc p20">
      <image src="@/static/image/logo.png" style="width: 260rpx; height: 346rpx"></image>
    </view>
    <view class="logintab">
      <view class="tabitem active">登录</view>
      <view class="tabitem">
        <navigator url="/pages/user/register">注册</navigator>
      </view>
    </view>
		<view class="loginForm">
			<view class="loginItem">
				<view class="loginItemLabel">
					<text>手机号：</text>
				</view>
				<uni-easyinput class="loginItemInput" :inputBorder="false" :maxlength="11" type="text" v-model="tel"></uni-easyinput>
			</view>
			<view class="loginItem">
				<view class="loginItemLabel">
					<text class="three">密码：</text>
				</view>
				<uni-easyinput class="loginItemInput" :inputBorder="false" :maxlength="13" placeholder="6-13位数字和字母" type="password" v-model="password"></uni-easyinput>
			</view>
			<view class="loginAgreement">
				<uni-data-checkbox multiple wrap selectedTextColor="black" v-model="value" :localdata="range"></uni-data-checkbox>
				<navigator url="/pages/user/agreement">《用户协议》</navigator>
				<navigator url="/pages/user/privacy" style="left: 406rpx">《隐私协议》</navigator>
			</view>
			<view class="uni-btn-v">
				<button @click="login">立即登录</button>
			</view>
		</view>
		<view class="bottom">
			<navigator url="/pages/user/forget">忘记密码</navigator>
			<!-- <navigator url="/pages/user/register">注册</navigator> -->
		</view>
	</view>
</template>

<script>
import { login } from '@/static/api/api'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      tel: '',
      password: '',
      value: [0],
      range: [
        {"value": 0,"text": "记住密码"},
        {"value": 1,"text": "我已阅读并同意"}
      ]
    }
  },
  methods: {
    ...mapMutations([
      'setUserInfo'
    ]),
    login () {
      if (!/^1\d{10}$/.test(this.tel)) {
        uni.showToast({title: '请输入正确的手机号码', icon: 'none'})
        return
      }
      if (this.password.length < 6) {
        uni.showToast({title: '请输入正确的密码', icon: 'none'})
        return
      }
      if (this.value.length === 0 || this.value.findIndex(v => v === 1) === -1) {
        uni.showToast({title: '请阅读并同意协议', icon: 'none'})
        return
      }
      if (this.value.findIndex(v => v === 0) !== -1) {
        uni.setStorageSync('login_info', { tel: this.tel, password: this.password })
      }
      login({ phone: this.tel, password: this.password }).then(res => {
        this.setUserInfo(res.response)
        uni.switchTab({ url: '/pages/index/index' })
      })
    }
  },
  mounted () {
    // 获取保存密码中的信息
    uni.getStorage({
      key: 'login_info',
      success: (e) => {
        this.tel = e.data.tel
        this.password = e.data.password
        this.value = [0, 1]
      }
    })
  },
  onBackPress () {
    uni.reLaunch({ url: '/pages/index/index' })
    return true
  }
}
</script>

<style scoped lang="less">
	.login {
		box-sizing: border-box;
		min-height: calc(100vh - 88rpx);
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
		.loginForm {
			.loginItem {
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
				.loginItemLabel {
					width: 172rpx;
					text {
						font-size: 32rpx;
					}
				}
				.three {
					letter-spacing:0.33em;
				}
				.loginItemInput {
					width: calc(100% - 172rpx);
					* {
						border: none;
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
			.loginAgreement {
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
