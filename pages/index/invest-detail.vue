<!-- 投资详情 -->
<template>
	<view class="detail">
		<image :src="baseForm.image" class="detail-img"></image>
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
							<view><text class="red">{{ baseForm.total_investment }}</text>元</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">每日分红</text>
							<view><text class="red">{{ baseForm.day_bonus }}</text>元起</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">投资周期</text>
							<view><text class="red">{{ baseForm.period }}</text>天</view>
						</uni-col>
					</uni-row>
				</template>
			</uni-list-item>
			<uni-list-item :title="`日化收益：${ baseForm.day_bonus_percent }%`"></uni-list-item>
			<uni-list-item :title="`起投金额：${ baseForm.min_investment }元`"></uni-list-item>
			<uni-list-item :title="`担保机构：${ baseForm.guarantee_agency }`"></uni-list-item>
			<uni-list-item title="投资零风险：本金保障"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="w">
						<progress :percent="baseForm.finished_investment_percent" stroke-width="15" activeColor="#CBA65B" show-info/>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<uni-title type="h3" title="投资详情" align="center" color="#56B0E9"></uni-title>
				</template>
			</uni-list-item>
			<view class="detail-body" v-html="baseForm.remark"></view>
		</uni-list>
    <navigator :url="`/pages/index/invest-order`" class="detail-btn">立即投资</navigator>
</view>
</template>

<script>
	import { investProjectDetail } from 'static/api/api'
	export default {
		data () {
			return {
				baseForm: {}
			}
		},
		methods: {
			investProjectDetail (id) {
				investProjectDetail(id).then(res => {
					this.baseForm = res.response
				})
			}
		},
		onLoad (option) {
			this.investProjectDetail(option.id)
		}
	}
</script>

<style lang="less" scoped>
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
			padding: 10rpx 40rpx 110rpx 40rpx;
		}
    .detail-btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      color: #fff;
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
      font-size: 32rpx;
      background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
    }
	}
</style>