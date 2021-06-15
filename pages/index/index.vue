<template>
	<view class="index">
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
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image"/>
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 视频 -->
		<view class="section3">
			<video class="video" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3c1782e0-60ab-11eb-8ff1-d5dcf8779628.m4v"
			 @error="videoErrorCallback" controls poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png">
			</video>
		</view>
		<!-- 活动列表 -->
		<view class="section4">
			<view class="event-head tc">
				活动专享区
			</view>
			<image src="../../static/c1.png" class="event-img"></image>
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
				list: [{
						url: '/static/c1.png',
						text: '如何投资',
						badge: '0',
						type: "primary"
					},
					{
						url: '/static/c2.png',
						text: '计算器',
						badge: '1',
						type: "success"
					},
					{
						url: '/static/c3.png',
						text: 'App下载',
						badge: '99',
						type: "warning"
					},
					{
						url: '/static/c4.png',
						text: '每日签到',
						badge: '2',
						type: "error"
					},
					{
						url: '/static/c5.png',
						text: '马上充值'
					},
					{
						url: '/static/c6.png',
						text: '快速体现'
					},
					{
						url: '/static/c7.png',
						text: '邀请好友'
					},
					{
						url: '/static/c8.png',
						text: '联系客服'
					}
				]
			}
		},
		methods: {
			change(e) {
				let { index } = e.detail
				this.list[index].badge && this.list[index].badge++
				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/user/login'
			})
		}
	}
</script>

<style lang="less" scoped>
	.tl{
		text-align: left;
	}
	.tr{
		text-align: right;
	}
	.tc{
		text-align: center;
	}
	.mb10{
		margin-bottom: 20rpx;
	}
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
		.grid-item-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 30rpx 0;
		}
		.image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	.section3{		
		.video{
			width: 100%;
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
