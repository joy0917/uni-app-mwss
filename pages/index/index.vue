<!-- 首页 -->
<template>
	<view class="container index">
		<!-- 轮播 -->
		<view class="section1">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval" :duration="swiperOption.duration">
				<swiper-item v-for="(item, index) in swiperData" :key="index">
					<view class="swiper-item">
						<image :src="item.img_url" class="w h"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 九宫格 -->
		<view class="section2">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange">
				<uni-grid-item v-for="(item, index) in gridData" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.image" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 公告和视频 -->
		<view class="section3">
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" :speed="30" :text="articleData"/>
			<video
        class="video"
        :loop="videoOption.loop"
        :autoplay="videoOption.autoplay"
        src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3c1782e0-60ab-11eb-8ff1-d5dcf8779628.m4v"
			  @error="videoErrorCallback" controls poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png">
			</video>
		</view>
		<!-- 活动列表 -->
		<view class="section4" v-for="(item, index) in eventData" :key="index">
			<view class="event-title" v-if="index === 0 || item.type !== eventData[index-1].type">{{ eventType[item.type] }}</view>
			<view class="event-head">
				<image :src="item.image" class="event-img"></image>
			</view>
			<view class="event-body">
				<view class="item-title"><image src="/static/image/verify.png" class="verify"></image>{{ item.title }}</view>				
				<uni-row class="mb10">
					<uni-col :span="8" class="tl">
						<view><text class="txt1">{{ item.min_investment }}</text>元</view>
						<view>起投金额</view>
					</uni-col>
					<uni-col :span="8" class="tc">
						<view><text class="txt1">{{ item.day_bonus }}</text>元起</view>
						<view>每日分红</view>
					</uni-col>
					<uni-col :span="8" class="tr">
						<view><text class="txt1">{{ item.period }}</text>天</view>
						<view>投资周期</view>
					</uni-col>
				</uni-row>
				<uni-row class="mb10">
					<uni-col :span="5" class="mt2">
						投资进度：
					</uni-col>
					<uni-col :span="13">
						<progress :percent="item.finished_investment_percent" stroke-width="6" activeColor="#CBA65B" class="mt8"/>
					</uni-col>
					<uni-col :span="6" class="txt2 tr">
						{{ item.finished_investment_percent }}%
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="16">
						<view class="mt2">项目规模：<text class="txt1">{{ item.total_investment }}</text>元</view>
					</uni-col>
					<uni-col :span="8" class="tr">
						<navigator :url="`/pages/index/invest-detail?id=${item.id}`">
							<view class="btn-invest"></view>
						</navigator>
					</uni-col>
				</uni-row>
			</view>
		</view>
	</view>
</template>

<script>
import { carouselList, articleList, investProject } from 'static/api/api'
import { getFormatDate } from 'static/libs/libs'
import { checkLogin } from 'static/libs/common'
export default {
	data() {
		return {
      swiperData: [],
      swiperOption: {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
      },
			videoOption: {
				loop: true,
				autoplay: false
			},
			gridData: [
				{ image: '/static/image/invest.png', text: '如何投资', limit: false, url: '/pages/subpages/index?text=1' },
				{ image: '/static/image/calculator.png', text: '计算器', limit: false, url: '/pages/index/calculator' },
				{ image: '/static/image/download.png', text: 'APP下载', limit: false, url: '/pages/subpages/index?text=19' },
				{ image: '/static/image/signin.png', text: '每日签到', limit: true, url: null },
				{ image: '/static/image/pay.png', text: '马上充值', limit: true, url: '/pages/index/pay' },
				{ image: '/static/image/withdraw.png', text: '快速提现', limit: true, url: '/pages/index/withdraw' },
				{ image: '/static/image/invite.png', text: '邀请好友', limit: true, url: '/pages/index/invite' },
				{ image: '/static/image/service2.png', text: '在线客服', limit: false, url: '/pages/service/index' }
			],
      articleData: '',
			eventType: {
				'STABLE': '稳健精选',
				'ACTIVITY': '活动专享',
				'NEW': '新手体验'
			},
			eventData: []
		}
	},
	methods: {
		gridChange (e) { // 九宫格切换
			let { index } = e.detail
			let item = this.gridData[index]
      if (item.limit && !checkLogin()) {
        return
      }
			switch (item.text){
				case '在线客服':
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
		videoErrorCallback () { // 视频报错
			uni.showModal({
				content: '视频加载失败',
				showCancel: false
			})
		},
		carouselList () { // 轮播列表
			carouselList({
        time: getFormatDate(),
        per_page: 10,
        current_page: 1
      }).then(res => {
        this.swiperData = res.response.data
			})
		},
		articleList () { // 公告列表
			articleList({
        title: '',
        type: '',
        per_page: 1,
        current_page: 1
      }).then(res => {
        let data = res.response.data
        this.articleData = data[0] && data[0].desc
			})
		},
		investProject () { // 投资项目
			investProject({
				type: '',
				page_num: 100,
				page: 1
			}).then(res => {
				let activityData = res.response.activity || []
				let newData = res.response.NEW || []
				let stableData = res.response.STABLE || []
				this.eventData = activityData.concat(newData).concat(stableData)
			})
		}
	},
	mounted () {
		this.carouselList()
		this.articleList()
		this.investProject()
	},
	onNavigationBarButtonTap () { // 右上角按钮
    if (checkLogin()) {
      uni.switchTab({
        url: '/pages/user/index'
      })
    }
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
