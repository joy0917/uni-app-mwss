<!-- 订单状态 -->
<template>
	<view class="status">
		<view class="tc mb30">
			<uni-title type="h1" title="等待收货" align="center" class="mt20"></uni-title>
			<view class="mb30 f12">请查收您的物品</view>
			<button type="primary" size="mini" plain>确认收货</button>
		</view>
		<uni-list>
			<uni-list-item :show-extra-icon="true" :extra-icon="{size: '20',type: 'location-filled'}" :title="`${detailData.address.name} ${detailData.address.phone}`" :note="detailData.address.detail"></uni-list-item>
			<uni-list-item title="商城订单"></uni-list-item>
			<uni-list-item :title="detailData.product.title" :note="`${detailData.product.integral}积分`" :thumb="detailData.product.bg_img" thumbSize="lg"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="t1">订单编号: {{ detailData.id }}</view>
				</template>
				<template slot="footer">
					<button type="primary" size="mini" plain class="copybtn" @click="copyData">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="t2">下单时间: {{ detailData.created_at }}</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import { orderDetail } from '@/static/api/api'
import { setClipboardData } from '@/uni_modules/u-clipboard/js_sdk'
export default {
  data() {
    return {
      detailData: {
        address: {},
        product: {}
      }
    }
  },
  methods: {
    orderDetail (id) {
      orderDetail(id).then(res => {
        this.detailData = res.response
      })
    },
    copyData () {
      setClipboardData(this.detailData.id).then(res => {
        console.log('success')
      })
    }
  },
  onLoad (option) {
    this.orderDetail(option.id)
  }
}
</script>

<style lang="less" scoped>
.status{
  .t1{
    font-size: 28rpx;
    margin-top: 12rpx;
  }
  .t2{
    font-size: 28rpx;
  }
  .copybtn{
    margin-right: 0;
  }
}
</style>
