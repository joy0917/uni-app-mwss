<!-- 商品详情 -->
<template>
	<view class="detail">
		<image src="/static/image/bg.png" class="detail-img"></image>
		<view class="detail-head">
			<uni-title type="h3" title="福鼎白茶"></uni-title>
			<uni-row class="mb10">
				<uni-col :span="12">需要<text class="red">1188</text>积分</uni-col>
				<uni-col :span="12" class="tr">您有<text>0</text>积分</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="12">库存：9999</uni-col>
				<uni-col :span="12" class="tr">
					<navigator url="/pages/integral/order">
						<button type="primary" class="detail-btn">立即兑换</button>
					</navigator>
				</uni-col>
			</uni-row>
		</view>
		<view class="detail-body">
			商品详情
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.detail{
		font-size: 28rpx;
		.detail-img{
			width: 100%;
			height: 375rpx;
		}
		.detail-head{
			padding: 10rpx 40rpx;
		}
		.detail-body{
			padding: 10rpx 40rpx;
		}
		.detail-btn{
			display: inline-block;
			width: 200rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: linear-gradient(180deg, #E8D396 0%, #CCA75D 100%);
			border-radius: 15px;
			font-size: 28rpx;
		}
	}
</style>
