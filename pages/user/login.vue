<template>
	<view class="login">
		<view class="loginForm">
			<view class="loginItem">
				<view class="loginItemLabel">
					<text>手机号：</text>
				</view>
				<uni-easyinput class="loginItemInput" :inputBorder="false" type="text" v-model="tel"></uni-easyinput>
			</view>
			<view class="loginItem">
				<view class="loginItemLabel">
					<text class="three">密码：</text>
				</view>
				<uni-easyinput class="loginItemInput" :inputBorder="false" placeholder="6-13位数字和字母" type="passwold" v-model="passwold"></uni-easyinput>
			</view>
			<view class="loginAgreement">
				<checkbox v-model="checkbox"></checkbox>
				<text>记住密码</text>
			</view>
			<view class="loginAgreement">
				<checkbox v-model="checkbox"></checkbox>
				<text>已经阅读</text>
				<navigator url="/pages/user/login">使用协议</navigator>
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">登陆</button>
			</view>
		</view>
		<view class="bottom">
			<navigator url="/pages/user/login">忘记密码</navigator>
			<navigator url="/pages/user/register">注册</navigator>
		</view>
	</view>
</template>

<script>
	import { login } from 'static/api/api'
	export default {
		data () {
			return {
				tel: '',
				passwold: '',
				checkbox: 'false',
				remember: 'false'
			}
		},
		methods: {
			formSubmit (e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
		box-sizing: border-box;
		min-height: calc(100vh - 88rpx);
		padding: 24rpx 36rpx;
		background: #f0f0f0;
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
					width: 100%;
					height: 106rpx;
					background: linear-gradient(180deg, #EDDDB6 0%, #D6B97F 100%);
					border-radius: 18rpx;
					line-height: 106rpx;
					color: #fff;
					font-size: 32rpx;
					font-weight: 500;
					text-align: center;
				}
			}
			.loginAgreement {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 25rpx;
				margin-top: 0;
				margin-bottom: 30rpx;
				&:first-child {
					margin-top: 40rpx;
					margin-bottom: 20rpx;
				}
				checkbox {
					transform:scale(0.5)
				}
				navigator {
					color: #0089DE;
					text-decoration: underline;
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
