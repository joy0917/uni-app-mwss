<!-- 积分商城 -->
<template>
	<view class="container integral">
		<uni-row :gutter="20">
			<uni-col :span="12" class="mb10" v-for="(item, index) in productData" :key="index">
				<navigator :url="`/pages/integral/detail?id=${item.id}`">
					<view class="goods-item">
						<image :src="$hostsUrl + item.bg_img" mode="aspectFit" class="goods-img"></image>
						<view class="goods-title">{{ item.title }}</view>
						<view class="goods-sub">需要<text class="red">{{ getThousand(item.integral) }}</text>积分</view>
					</view>
				</navigator>
			</uni-col>
		</uni-row>
	</view>
</template>

<script>
	import { productList } from '@/static/api/api'
  import { getThousand } from '@/static/libs/libs'
	export default {
		data() {
			return {
        getThousand,
				productData: []
			}
		},
		methods: {
			productList () { // 商品列表
				productList({
					title: '',
					per_page: 100,
					current_page: 1
				}).then(res => {
					this.productData = res.response.data
				})
			}
		},
		mounted () {
			this.productList()
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
    padding: 30rpx;
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
      overflow: hidden;    
      text-overflow: ellipsis;
      white-space: nowrap;
		}
		.goods-sub{
			margin: 10rpx;
		}
	}
</style>
