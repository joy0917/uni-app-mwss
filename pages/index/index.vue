<!-- 首页 -->
<template>
	<view class="index">
		<!-- 轮播 -->
		<view class="section1">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval" :duration="swiperOption.duration">
				<swiper-item v-for="(item, index) in swiperData" :key="index">
					<view class="swiper-item">
						<image :src="$hostsUrl + item.img_url" class="w h"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 九宫格 -->
		<view class="container section2">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange">
				<uni-grid-item v-for="(item, index) in gridData" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 公告和视频 -->
		<view class="container section3">
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" :speed="5" color="#FF0000" :text="articleData"/>
			<video
        v-if="videoOption.is_show"
        class="video"
        :loop="videoOption.loop"
        :autoplay="videoOption.autoplay"
        :src="videoOption.video"
        :poster="videoOption.img"
        controls>
			</video>
		</view>
		<!-- 活动列表 -->
		<view class="container section4" v-for="(item, index) in eventData" :key="index" @click="gotoDetail(item.id)">
			<view class="event-title" v-if="index === 0 || item.type !== eventData[index-1].type">{{ eventType[item.type] }}</view>
			<view class="event-head">
				<image :src="$hostsUrl + item.image" class="event-img"></image>
			</view>
			<view class="event-body">
				<view class="item-title"><image src="@/static/image/verify.png" class="verify"></image>{{ item.title }}</view>				
				<uni-row class="mb10">
					<uni-col :span="8" class="tl">
						<view><text class="txt1">{{ getThousand(item.min_investment) }}</text>元</view>
						<view>起投金额</view>
					</uni-col>
					<uni-col :span="8" class="tc">
						<view><text class="txt1">{{ getThousand(item.day_bonus) }}</text>元起</view>
						<view>每日分红</view>
					</uni-col>
					<uni-col :span="8" class="tr">
						<view><text class="txt1">{{ item.period }}</text>天</view>
						<view>投资周期</view>
					</uni-col>
				</uni-row>
				<uni-row class="mb10">
					<uni-col :span="12">
						<view class="mt2">规模：<text class="txt1">{{ getThousand(item.total_investment) }}</text>万元</view>
					</uni-col>
          <uni-col :span="4" class="mt5 tr">
            进度：
          </uni-col>
          <uni-col :span="4">
            <progress :percent="item.finished_investment_percent" stroke-width="6" activeColor="#ff8a00" class="mt10"/>
          </uni-col>
          <uni-col :span="4" class="txt2 tr mt2">
            {{ item.finished_investment_percent }}%
          </uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="24">
            <view class="btn-invest">立即投资</view>
					</uni-col>
				</uni-row>
			</view>
		</view>
	</view>
</template>

<script>
import { carouselList, articleList, investProject, uploadDetail } from '@/static/api/api'
import { getFormatDate, getThousand } from '@/static/libs/libs'
import { checkLogin, userSignin } from '@/static/libs/common'
export default {
	data() {
		return {
      getFormatDate,
      getThousand,
      swiperData: [],
      swiperOption: {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
      },
			videoOption: {
        is_show: 0,
				loop: true,
				autoplay: false,
        video: '',
        img: ''
			},
			gridData: [
				{ icon1: '/static/icon1/home/1.png', icon2: '/static/icon2/home/1.png', icon3: '/static/icon3/home/1.png', icon4: '/static/icon4/home/1.png', text: '如何投资', limit: false, url: '/pages/subpages/index?text=1' },
				{ icon1: '/static/icon1/home/2.png', icon2: '/static/icon2/home/2.png', icon3: '/static/icon3/home/2.png', icon4: '/static/icon4/home/2.png', text: '计算器', limit: false, url: '/pages/index/calculator' },
				{ icon1: '/static/icon1/home/3.png', icon2: '/static/icon2/home/3.png', icon3: '/static/icon3/home/3.png', icon4: '/static/icon4/home/3.png', text: 'APP下载', limit: false, url: '/pages/subpages/index?text=19' },
				{ icon1: '/static/icon1/home/4.png', icon2: '/static/icon2/home/4.png', icon3: '/static/icon3/home/4.png', icon4: '/static/icon4/home/4.png', text: '每日签到', limit: true, url: null },
				{ icon1: '/static/icon1/home/5.png', icon2: '/static/icon2/home/5.png', icon3: '/static/icon3/home/5.png', icon4: '/static/icon4/home/5.png', text: '马上充值', limit: true, url: '/pages/index/pay' },
				{ icon1: '/static/icon1/home/6.png', icon2: '/static/icon2/home/6.png', icon3: '/static/icon3/home/6.png', icon4: '/static/icon4/home/6.png', text: '快速提现', limit: true, url: '/pages/index/withdraw' },
				{ icon1: '/static/icon1/home/7.png', icon2: '/static/icon2/home/7.png', icon3: '/static/icon3/home/7.png', icon4: '/static/icon4/home/7.png', text: '邀请好友', limit: true, url: '/pages/index/invite' },
				{ icon1: '/static/icon1/home/8.png', icon2: '/static/icon2/home/8.png', icon3: '/static/icon3/home/8.png', icon4: '/static/icon4/home/8.png', text: '在线客服', limit: false, url: '/pages/service/index' }
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
    gotoDetail (id) {
      uni.navigateTo({ url: `/pages/index/invest-detail?id=${id}` })
    },
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
          userSignin()
					break;
				default:
					uni.navigateTo({ url: item.url })
					break;
			}
		},
		carouselList () { // 轮播列表
			carouselList({
        type: '首页轮播图',
        time: this.getFormatDate(),
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
        this.articleData = data[0] && data[0].content && data[0].content.replace(/<.*?>/g, "")
			})
		},
		investProject () { // 投资项目
			investProject({
				type: '',
				page_num: 100,
				page: 1
			}).then(res => {
				let activityData = res.response.activity || []
				let newData = res.response.new || []
				let stableData = res.response.stable || []
				this.eventData = activityData.concat(newData).concat(stableData)
			})
		},
		uploadDetail () { // 首页视频
			uploadDetail({
				type: '首页视频'
			}).then(res => {
        this.videoOption.video = res.response.img_url ? this.$hostsUrl + res.response.img_url : ''
        this.videoOption.img = res.response.img_path ? this.$hostsUrl + res.response.img_path : ''
        this.videoOption.is_show = res.response.is_show
			})
		}
	},
	mounted () {
		this.carouselList()
		this.articleList()
		this.investProject()
		this.uploadDetail()
	},
	onNavigationBarButtonTap () { // 右上角按钮
    if (checkLogin()) {
      uni.switchTab({ url: '/pages/user/index' })
    }
	}
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.container{
  background: #fff;
}
.section1{
  .swiper {
    height: 400rpx;
    .swiper-item {
      display: block;
      height: 100%;
    }
  }
}
.section2 {
  border-bottom: 20rpx solid #F0F0F0;
  .grid-item-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 80rpx;
    height: 80rpx;
  }
  .text{
    margin-top: 10rpx;
  }
}
.section3{		
  .video{
    width: 100%;
    height: 386rpx;
    margin-top: 20rpx;
  }
}
.section4{
  .event-title{
    padding: 30rpx 0;
    color: #CBA65B;
    font-size: 32rpx;
    text-align: center;
    font-weight: bold;
  }
  .event-head{
    height: 380rpx;
    overflow: hidden;
    .event-img{
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .event-body{
    padding: 20rpx 20rpx 30rpx 20rpx;
    .item-title{
      font-size: 32rpx;
      color: #000;
      margin-bottom: 20rpx;
      font-weight: bold;
    }
    .verify{
      width: 50rpx;
      height: 50rpx;
      margin-right: 20rpx;
      vertical-align: middle;
    }
    .txt1{
      color: #ff2200;
      font-size: 32rpx;
      font-weight: bold;
    }
    .txt2{
      color: #000;
      font-size: 32rpx;
      font-weight: bold;
    }
    .btn-invest{
      display: inline-block;
      width: 100%;
      height: 70rpx;
      line-height: 70rpx;
      text-align: center;
      font-size: 28rpx;
      border-radius: 10rpx;
      color: @default;
      background: @warning;
    }
  }
}
</style>
