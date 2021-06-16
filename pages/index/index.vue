<template>
	<view class="container index">
		<!-- 轮播 -->
		<view class="section1">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/image/bg.png" class="w h"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/image/bg.png" class="w h"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/image/bg.png" class="w h"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 九宫格 -->
		<view class="section2">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange">
				<uni-grid-item v-for="(item, index) in gridList" :index="index" :key="index">
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
		<view class="section4" v-for="(item, index) in eventList" :key="index">
			<view class="event-title">{{ item.type }}</view>
			<view class="event-head">
				<image src="/static/image/bg.png" class="event-img"></image>
			</view>
			<view class="event-body">
				<view class="item-title"><image src="/static/image/verify.png" class="verify"></image>{{ item.title }}</view>				
				<uni-row class="mb10">
					<uni-col :span="8" class="tl">
						<view><text class="txt1">{{ item.aa }}</text>元</view>
						<view>起投金额</view>
					</uni-col>
					<uni-col :span="8" class="tc">
						<view><text class="txt1">{{ item.bb }}</text>元起</view>
						<view>每日分红</view>
					</uni-col>
					<uni-col :span="8" class="tr">
						<view><text class="txt1">{{ item.cc }}</text>天</view>
						<view>投资周期</view>
					</uni-col>
				</uni-row>
				<uni-row class="mb10">
					<uni-col :span="5" class="mt2">
						投资进度：
					</uni-col>
					<uni-col :span="13">
						<progress :percent="item.dd" stroke-width="6" activeColor="#CBA65B" class="mt8"/>
					</uni-col>
					<uni-col :span="6" class="txt2 tr">
						{{ item.dd }}%
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="12">
						<view class="mt2">项目规模：<text class="txt1">{{ item.ee }}</text>万元</view>
					</uni-col>
					<uni-col :span="12" class="tr">
						<view class="btn-invest" @click="navigateTo('/pages/index/invest-detail')"></view>
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
				gridList: [
					{ image: '/static/image/invest.png', text: '如何投资', url: '/pages/index/invest' },
					{ image: '/static/image/calculator.png', text: '计算器', url: '/pages/index/calculator' },
					{ image: '/static/image/download.png', text: 'App下载', url: '/pages/index/download' },
					{ image: '/static/image/signin.png', text: '每日签到', url: null },
					{ image: '/static/image/pay.png', text: '马上充值', url: '/pages/index/pay' },
					{ image: '/static/image/withdraw.png', text: '快速体现', url: '/pages/index/withdraw' },
					{ image: '/static/image/invite.png', text: '邀请好友', url: '/pages/index/invite' },
					{ image: '/static/image/service2.png', text: '联系客服', url: '/pages/service/index' }
				],
				eventList: [
					{ type: '活动专享区', title: '道路建设项目', image: '/static/image/bg.png', aa: '8000', bb: '1960', cc: '85', dd: '26.66', ee: '230000' },
					{ type: '新手体验区', title: '贵州妇女儿童医院建设项目', image: '/static/image/bg.png', aa: '8000', bb: '1960', cc: '85', dd: '26.66', ee: '230000' },
					{ type: '稳健精选区', title: '投资理财项目', image: '/static/image/bg.png', aa: '8000', bb: '1960', cc: '85', dd: '26.66', ee: '230000' },
				]
			}
		},
		methods: {
			navigateTo (url) { // 跳转
				console.log(url)
				uni.navigateTo({ url })
			},
			gridChange (e) { // 九宫格切换
				let { index } = e.detail
				let item = this.gridList[index]
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
	.index{
		background: #fff;
	}
	.section1{
		.swiper {
			height: 360rpx;
			.swiper-item {
				display: block;
				height: 100%;
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
		.event-title{
			padding: 30rpx 0;
			color: #CBA65B;
			font-size: 36rpx;
		}
		.event-head{
			height: 252rpx;
			overflow: hidden;
			.event-img{
				width: 100%;
			}
		}
		.event-body{
			padding: 20rpx 40rpx 30rpx 40rpx;
			.item-title{
				font-size: 28rpx;
				color: #000;
				margin-bottom: 20rpx;
				font-weight: bold;
			}
			.verify{
				width: 32rpx;
				height: 32rpx;
				vertical-align: middle;
			}
			.txt1{
				color: #E38075;
				font-size: 32rpx;
			}
			.txt2{
				color: #CBA65B;
				font-size: 32rpx;
			}
			.btn-invest{
				display: inline-block;
				width: 114rpx;
				height: 44rpx;
				background: url(/static/image/btn-invest.png) no-repeat 100% 100%;
				background-size: 100%;
			}
		}
	}
</style>
