<template>
	<view class="">
		登陆
		<navigator url="/pages/user/register">没有账号？前往注册</navigator>
	</view>
</template>

<script>
	import { login } from 'libs/api'
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			login()
		}
	}
</script>

<style>
</style>
