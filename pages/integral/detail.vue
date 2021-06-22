<!-- 商品详情 -->
<template>
	<view class="detail">
		<image :src="detailFrom.bg_img" class="detail-img"></image>
		<view class="detail-head">
			<uni-title type="h3" :title="detailFrom.title"></uni-title>
			<uni-row class="mb10">
				<uni-col :span="12">需要<text class="red">{{ detailFrom.integral }}</text>积分</uni-col>
				<uni-col :span="12" class="tr">您有<text>0</text>积分</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="12">库存：{{ detailFrom.stock_num || 0 }}</uni-col>
				<uni-col :span="12" class="tr">
					<navigator :url="`/pages/integral/order?id=${ detailFrom.id }`">
						<button type="primary" class="detail-btn">立即兑换</button>
					</navigator>
				</uni-col>
			</uni-row>
		</view>
		<view class="detail-title">商品详情</view>
		<view class="detail-body" v-html="detailFrom.product_detail"></view>
	</view>
</template>

<script>
	import { productDetail } from 'static/api/api'
	export default {
		data() {
			return {
				detailFrom: {}
			}
		},
		methods: {
			productDetail (id) { // 商品详情
				productDetail(id).then(res => {
					this.detailFrom = res.response
				})
			}
		},
		onLoad(options) {
			this.productDetail(options.id)
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
		.detail-btn{
			display: inline-block;
			width: 200rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: linear-gradient(180deg, #E8D396 0%, #CCA75D 100%);
			border-radius: 15px;
			font-size: 28rpx;
		}
		.detail-title{
			padding: 20rpx 0;
			margin-bottom: 20rpx;
			color: #CCA85E;
			text-align: center;
			border-bottom: 2px solid #CCA85E;
		}
		.detail-body{
			padding: 10rpx 40rpx;
			img{
				display: block !important;
				max-width: 100% !important;
			}
		}
	}
</style>
