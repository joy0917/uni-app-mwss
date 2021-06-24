<!-- 订单状态 -->
<template>
	<view class="status">
		<view class="tc mb30">
			<uni-title type="h1" :title="statusList[detailData.status]" align="center" class="mt20"></uni-title>
      <view v-if="detailData.status !== 3">
        <view class="mb30 f12">请查收您的物品</view>
        <button type="primary" size="mini" plain @click="confirmGoods">确认收货</button>
      </view>
      <view v-if="detailData.status === 3">
        <navigator url="/pages/integral/index" open-type="switchTab" class="status-btn">再次兑换</navigator>
      </view>
		</view>
		<uni-list>
			<uni-list-item :show-extra-icon="true" :extra-icon="{size: '20',type: 'location-filled'}" :title="`${detailData.address.name || '-'} ${detailData.address.phone || '-'}`" :note="detailData.address.detail"></uni-list-item>
			<uni-list-item title="商城订单"></uni-list-item>
			<uni-list-item :title="detailData.product.title" :note="`${detailData.product.integral}积分`" :thumb="detailData.product.bg_img" thumbSize="lg"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="t1">订单编号: {{ detailData.order_num }}</view>
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
import { orderDetail, orderEnsure } from '@/static/api/api'
import { setClipboardData } from '@/uni_modules/u-clipboard/js_sdk'
export default {
  data() {
    return {
      detailData: {
        address: {},
        product: {}
      },
      statusList: [null, '待处理', '已发货', '已收货']
    }
  },
  methods: {
    orderDetail (id) {
      orderDetail(id).then(res => {
        this.detailData = res.response
      })
    },
    copyData () {
      setClipboardData(this.detailData.order_num).then(res => {
        console.log('success')
      })
    },
    confirmGoods () {
      orderEnsure(this.detailData.id).then(res => {
        uni.showModal({
          title: '提示',
          content: '操作成功',
          showCancel: false,
          success: () => {
            this.orderDetail(this.detailData.id)
          }
        })
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
  .status-btn{
    display: inline-block;
    font-size: 26rpx;
    border: 1px solid #000;
    border-radius: 10rpx;
    padding: 0 1.34em;
    line-height: 2.3;
  }
}
</style>
