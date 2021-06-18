<template>
	<view class="register">
		<form @submit="formSubmit" class="registerForm">
			<view class="registerItem">
				<text>手机号码：</text>
				<input type="text" v-model="tel">
			</view>
			<view class="registerItem">
				<text>您的密码：</text>
				<input placeholder="6-13位数字和字母" type="passwold" v-model="passwold">
			</view>
			<view class="registerItem">
				<text>确认密码：</text>
				<input placeholder="6-13位数字和字母" type="passwold" v-model="againPasswold">
			</view>
			<view class="registerItem">
				<text class="three">验证码：</text>
				<input type="text" v-model="graphicalCAPTCHA">
			</view>
			<view class="registerItem">
				<text>短信验证：</text>
				<input type="text" v-model="SMSCode">
			</view>
			<view class="registerItem">
				<text class="three">推荐人：</text>
				<input placeholder="推荐人" type="text" v-model="referrer">
			</view>
			<view class="registerAgreement">
				<checkbox v-model="checkbox"></checkbox>
				<text>已经阅读</text>
				<navigator url="/pages/user/login">使用协议</navigator>
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">注册并登陆</button>
			</view>
		</form>
		<view class="bottom">
			<navigator url="/pages/user/login">忘记密码</navigator>
			<navigator url="/pages/user/login">登陆</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				tel: '',
				passwold: '',
				againPasswold: '',
				graphicalCAPTCHA: '',
				SMSCode: '',
				referrer: '',
				checkbox: 'false'
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
	.register {
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
				text {
					font-size: 32rpx;
				}
				.three {
					letter-spacing:0.33em;
				}
				input {
					width: calc(100% - 172rpx);
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
			.registerAgreement {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 25rpx;
				margin-top: 46rpx;
				margin-bottom: 30rpx;
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
