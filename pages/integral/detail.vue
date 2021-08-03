<!-- 商品详情 -->
<template>
	<view class="detail">
		<image :src="detailFrom.bg_img" mode="aspectFit" class="detail-img"></image>
		<view class="detail-head">
			<uni-title type="h3" :title="detailFrom.title"></uni-title>
			<uni-row class="mb10">
				<uni-col :span="12">需要<text class="red">{{ getThousand(detailFrom.integral) }}</text>积分</uni-col>
				<uni-col :span="12" class="tr">您有<text>{{ getThousand(user_info.integral) }}</text>积分</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="12">库存：{{ getThousand(detailFrom.stock_num) }}</uni-col>
				<uni-col :span="12" class="tr">
          <button type="primary" class="detail-btn" @click="gotoDetail(detailFrom.id)">
					  立即兑换
          </button>
				</uni-col>
			</uni-row>
		</view>
		<view class="detail-title">商品详情</view>
		<view class="detail-body" v-html="detailFrom.product_detail"></view>
	</view>
</template>

<script>
	import { productDetail } from '@/static/api/api'
  import { getThousand } from '@/static/libs/libs'
	export default {
		data() {
			return {
        getThousand,
				detailFrom: {}
			}
		},
    computed: {
      user_info () {
        return this.$store.state.user.user_info
      }
    },
		methods: {
      gotoDetail (id) {
        uni.navigateTo({ url: `/pages/integral/order?id=${ id }` })
      },
			productDetail (id) { // 商品详情
				productDetail(id).then(res => {
					this.detailFrom = res.response
					this.detailFrom.bg_img = this.$hostsUrl + this.detailFrom.bg_img
					this.detailFrom.product_detail = this.detailFrom.product_detail.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
				})
			}
		},
		onLoad(options) {
			this.productDetail(options.id)
		}
	}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.detail{
  font-size: 28rpx;
  .detail-img{
    width: 100%;
  }
  .detail-head{
    padding: 10rpx 40rpx;
  }
  .detail-btn{
    display: inline-block;
    width: 180rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    font-size: 28rpx;
    border-radius: 10rpx;
    color: @default;
    background: @warning;
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
  }
}
</style>
