<template>
	<view class="container integral">
		<uni-row :gutter="20">
			<uni-col :span="12" class="mb10">
				<navigator url="/pages/integral/detail">
					<view class="goods-item">
						<image src="/static/image/bg.png" class="goods-img"></image>
						<view class="goods-title">福鼎白茶</view>
						<view class="goods-sub">需要<text class="red">1118</text>积分</view>
					</view>
				</navigator>
			</uni-col>
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
	.integral{
		min-height: 100vh;
	}
	.goods-item{
		background: #FFFFFF;
		border-radius: 10rpx;
		height: 428rpx;
		overflow: hidden;
		.goods-img{
			width: 100%;
			height: 316rpx;
		}
		.goods-title{
			font-size: 26rpx;
			color: #000;
			margin: 10rpx;
			font-weight: bold;
		}
		.goods-sub{
			margin: 10rpx;
		}
	}
</style>
