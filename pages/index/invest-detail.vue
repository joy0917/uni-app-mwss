<!-- 投资详情 -->
<template>
	<view class="detail">
    <view class="pl15 pr15">
		  <image :src="baseForm.image" class="detail-img"></image>
    </view>
		<uni-list :border="false" class="detail-head">
			<uni-list-item>
				<template slot="body">
					<uni-title type="h3" :title="baseForm.title"></uni-title>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<uni-row class="detail-item">
						<uni-col :span="8">
							<text class="t1">项目规模</text>
							<view><text class="red fb">{{ getThousand(baseForm.total_investment) }}</text>万元</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">每日分红</text>
							<view><text class="red fb">{{ getThousand(baseForm.day_bonus) }}</text>元起</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">投资周期</text>
							<view><text class="red fb">{{ baseForm.period }}</text>天</view>
						</uni-col>
					</uni-row>
				</template>
			</uni-list-item>
			<uni-list-item :title="`日化收益：${ baseForm.day_bonus_percent }%`"></uni-list-item>
			<uni-list-item :title="`起投金额：${ getThousand(baseForm.min_investment) }元`"></uni-list-item>
			<uni-list-item :title="`担保机构：${ baseForm.guarantee_agency }`"></uni-list-item>
			<uni-list-item title="投资零风险：本金保障"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="w">
						<progress :percent="baseForm.finished_investment_percent" stroke-width="15" activeColor="#ff8a00" show-info/>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item class="border">
				<template slot="body">
					<uni-title type="h3" title="投资详情" align="center" color="#56B0E9"></uni-title>
				</template>
			</uni-list-item>
			<view class="detail-body" v-html="baseForm.remark"></view>
		</uni-list>
    <button type="primary" class="detail-btn" @click="gotoInvest">立即投资</button>
</view>
</template>

<script>
import { investProjectDetail } from '@/static/api/api'
import { getThousand } from '@/static/libs/libs'
import { checkLogin } from '@/static/libs/common'
export default {
  data () {
    return {
      getThousand,
      product_id: null,
      baseForm: {}
    }
  },
  methods: {
    gotoInvest () {
      if (checkLogin()) {
        uni.navigateTo({ url: `/pages/index/invest-order?id=${this.product_id}&min=${this.baseForm.min_investment}` })
      }
    },
    investProjectDetail (id) {
      investProjectDetail(id).then(res => {
        this.baseForm = res.response
        this.baseForm.image = this.$hostsUrl + this.baseForm.image
        this.baseForm.remark = this.baseForm.remark.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
      })
    }
  },
  onLoad (option) {
    this.product_id = option.id
    this.investProjectDetail(option.id)
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.detail{
  background: #f8f8f8;
  font-size: 28rpx;
  .detail-img{
    width: 100%;
    height: 375rpx;
  }
  .detail-head{
    .uni-list-item{
      background: #f8f8f8;
    }
    .detail-item{
      background: #fff;
      width: 100%;
      text-align: center;
      padding: 20rpx 0;
      .t1{
        font-size: 24rpx;
        color: #929292;
      }
    }
  }
  .detail-body{
    padding: 40rpx 40rpx 110rpx 40rpx;
    /deep/ table{
      border-collapse: collapse;
      td{
        border: 1px solid #000;
        padding: 4rpx 10rpx;
      }
    }
  }
  .detail-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 32rpx;
    color: @default;
    background: @warning;
  }
  .border{
    border-bottom: 2px solid #56B0E9;
  }
}
</style>