<template>
	<view class="container">
		<!-- 轮播 -->
		<view class="section1">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item red"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item green"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item blue"></view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 九宫格 -->
		<view class="section2">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.image" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 视频 -->
		<view class="section3">
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
			<video class="video" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3c1782e0-60ab-11eb-8ff1-d5dcf8779628.m4v"
			 @error="videoErrorCallback" controls poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png">
			</video>
		</view>
		<!-- 活动列表 -->
		<view class="section4">
			<view class="event-head tc">
				活动专享区
			</view>
			<image src="/pages/static/image/c1.png" class="event-img"></image>
			<view class="event-body">
				<view class="t1">道路建设项目</view>				
				<uni-row class="mb10">
					<uni-col :span="8">
						<view class="t2">8000元</view>
						<view>起投金额</view>
					</uni-col>
					<uni-col :span="8" class="tc">
						<view class="t2">1960元起</view>
						<view>每日分红</view>
					</uni-col>
					<uni-col :span="8" class="tr">
						<view class="t2">85天</view>
						<view>投资周期</view>
					</uni-col>
				</uni-row>
				<uni-row class="mb10">
					<uni-col :span="6">
						投资进度：
					</uni-col>
					<uni-col :span="14">
						<progress :percent="26.66" stroke-width="3" class="p1"/>
					</uni-col>
					<uni-col :span="4" class="tr">
						26.66%
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="12">
						<view class="t4">项目规模：230000万元</view>
					</uni-col>
					<uni-col :span="12" class="tr">
						<button type="info" size="mini">立即投资</button>
					</uni-col>
				</uni-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				list: [
					{ image: '/static/image/icon.png', text: '如何投资', url: '/pages/index/invest' },
					{ image: '/static/image/icon.png', text: '计算器', url: '/pages/index/calculator' },
					{ image: '/static/image/icon.png', text: 'App下载', url: '/pages/index/download' },
					{ image: '/static/image/icon.png', text: '每日签到', url: null },
					{ image: '/static/image/icon.png', text: '马上充值', url: '/pages/index/pay' },
					{ image: '/static/image/icon.png', text: '快速体现', url: '/pages/index/withdraw' },
					{ image: '/static/image/icon.png', text: '邀请好友', url: '/pages/index/invite' },
					{ image: '/static/image/icon.png', text: '联系客服', url: '/pages/service/index' }
				]
			}
		},
		methods: {
			gridChange (e) { // 九宫格切换
				let { index } = e.detail
				let item = this.list[index]
				switch (item.text){
					case '联系客服':
						uni.switchTab({ url: item.url })
						break;
					case '每日签到':
						uni.showModal({
							content: '签到成功',
							showCancel: false
						})
						break;
					default:
						uni.navigateTo({ url: item.url })
						break;
				}
			},
			videoErrorCallback (e) { // 视频报错
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		},
		onNavigationBarButtonTap (e) { // 右上角按钮
			uni.navigateTo({
				url: '/pages/user/login'
			})
		}
	}
</script>

<style lang="less" scoped>
	.section1{
		.swiper {
			height: 400rpx;
			.swiper-item {
				display: block;
				height: 100%;
				text-align: center;
			}
			.red{
				background-color: red;
			}
			.green{
				background-color: green;
			}
			.blue{
				background-color: blue;
			}
		}
	}
	.section2 {
		padding: 40rpx 0;
		.grid-item-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20rpx 0;
		}
		.image {
			width: 88rpx;
			height: 88rpx;
		}
		.text{
			font-size: 24rpx;
			margin-top: 10rpx;
		}
	}
	.section3{		
		.video{
			width: 100%;
			margin-top: 20rpx;
		}
	}
	.section4{
		.event-head{
			padding: 14rpx 0;
			color: #007aff;
			font-size: 28rpx;
		}
		.event-img{
			width: 100%;
		}
		.event-body{
			padding: 20rpx;
			font-size: 24rpx;
			.t1{
				margin-bottom: 20rpx;
			}
			.t2{
				font-size: 32rpx;
			}
			.t4{
				margin-top: 15rpx;
			}
			.p1{
				margin-top: 16rpx;
			}
		}
	}
</style>
