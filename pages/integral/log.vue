<!-- 兑换记录 -->
<template>
	<view class="log">
		<uni-list>
			<uni-list-item :thumb="item.product.bg_img" @click="itemClick(item.id)" thumbSize="lg" showArrow clickable v-for="(item, index) in orderData" :key="index">
        <view slot="body">
          <view class="log-title">{{ item.product.title }}</view>
          <view class="log-con" :class="{ 'black': item.status === 3 }">{{statusList[item.status]}}</view>
        </view>
      </uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { orderList } from '@/static/api/api'
	export default {
		data () {
			return {
				orderData: [],
        statusList: [null, '待处理', '已发货', '已收货']
			}
		},
		methods: {
			itemClick (id) {
				uni.navigateTo({
					url: `/pages/integral/status?id=${id}`
				})
			},
      orderList () {
        orderList({
          per_page: 100,
          current_page: 1
        }).then(res => {
          this.orderData = res.response.data
        })
      }
		},
    mounted () {
      this.orderList()
    },
	}
</script>

<style lang="less" scoped>
.log{
  .log-title{
    font-size: 28rpx;
  }
  .log-con{
    font-size: 24rpx;
    margin-top: 10rpx;
    color: #E38075;
  }
  .black {
    color: #000;
  }
}
</style>
