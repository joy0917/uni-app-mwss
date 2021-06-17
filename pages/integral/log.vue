<!-- 兑换记录 -->
<template>
	<view>
		<uni-list>
			<uni-list-item title="福鼎白茶 x1" note="等待收货" thumb="/static/image/bg.png" thumbSize="lg" showArrow clickable @click="itemClick"></uni-list-item>
			<uni-list-item title="福鼎白茶 x1" note="已收货" thumb="/static/image/bg.png" thumbSize="lg" showArrow clickable @click="itemClick"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			itemClick (e) {
				console.log(e)
				uni.navigateTo({
					url: '/pages/integral/status'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
</style>
