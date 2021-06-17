<template>
	<view class="container">
		<uni-row :gutter="20">
			<uni-col :span="12">1</uni-col>
			<uni-col :span="12">2</uni-col>
		</uni-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		},
		onNavigationBarButtonTap (e) { // 右上角按钮
			uni.navigateTo({
				url: '/pages/integral/log'
			})
		}
	}
</script>

<style lang="less" scoped>
</style>
