<!-- 投资详情 -->
<template>
	<view class="detail">
		<image src="/static/image/bg.png" class="detail-img"></image>
		<uni-list :border="false" class="detail-head">
			<uni-list-item>
				<template slot="body">
					<uni-title type="h3" title="贵州妇女儿童医院建设项目"></uni-title>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<uni-row class="detail-item">
						<uni-col :span="8">
							<text class="t1">项目规模</text>
							<view>&yen;<text class="red">19500</text>万元</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">每日分红</text>
							<view><text class="red">1276</text>元起</view>
						</uni-col>
						<uni-col :span="8">
							<text class="t1">投资周期</text>
							<view><text class="red">60</text>天</view>
						</uni-col>
					</uni-row>
				</template>
			</uni-list-item>
			<uni-list-item title="日化收益：2.32%"></uni-list-item>
			<uni-list-item title="起投金额：55000元"></uni-list-item>
			<uni-list-item title="担保机构：中国平安保险（香港）有限公司"></uni-list-item>
			<uni-list-item title="投资零风险：本金保障"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<view class="w">
						<progress :percent="80" stroke-width="15" activeColor="#CBA65B" show-info/>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<uni-title type="h3" title="投资详情" align="center" color="#56B0E9"></uni-title>
				</template>
			</uni-list-item>
		</uni-list>
</view>
</template>

<script>
	export default {
		data () {
			return {
				formData: {
					a: [],
					b: []
				},
				a: [{
					text: '记住密码',
					value: 0
				}],
				b: [{
					text: '已经阅读',
					value: 0
				}]
			}
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
	}
</style>