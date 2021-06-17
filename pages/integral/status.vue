<!-- 订单状态 -->
<template>
	<view class="status">
		<view class="tc mb30">
			<uni-title type="h1" title="等待收货" align="center" class="mt20"></uni-title>
			<view class="mb30 f12">请查收您的物品</view>
			<button type="primary" size="mini" plain>确认收货</button>
		</view>
		<uni-list>
			<uni-list-item title="SUNNY 1333333333" note="河南省郑州市"></uni-list-item>
			<uni-list-item title="商城订单"></uni-list-item>
			<uni-list-item title="福鼎白茶 x1" note="1188积分" thumb="/static/image/bg.png" thumbSize="lg"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="t1">订单编号: 123456789</view>
				</template>
				<template slot="footer">
					<button type="primary" size="mini">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="t1">下单时间: 2021-01-01 12:00:00</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.status{
		.t1{
			font-size: 28rpx;
		}
	}
</style>
