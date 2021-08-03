<!-- 关于我们 -->
<template>
	<view class="container about">
		<image :src="banner" class="about-thumbnail"></image>
		<!-- 九宫格 -->
		<view class="about-title">新手指南</view>
		<view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange1">
				<uni-grid-item v-for="(item, index) in gridList1" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 九宫格 -->
		<view class="about-title">关于我们</view>
		<view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange2">
				<uni-grid-item v-for="(item, index) in gridList2" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 九宫格 -->
		<view class="about-title">帮助中心</view>
		<view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange3">
				<uni-grid-item v-for="(item, index) in gridList3" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- 九宫格 -->
		<view class="about-title">平台公告</view>
		<view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange4">
				<uni-grid-item v-for="(item, index) in gridList4" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
import { carouselList } from '@/static/api/api'
export default {
  data() {
    return {
      banner: '',
      gridList1: [
        { icon4: '/static/icon4/about/1.png',  text: '如何注册', url: '/pages/subpages/index?text=0' },
        { icon4: '/static/icon4/about/2.png',  text: '如何投资', url: '/pages/subpages/index?text=1' },
        { icon4: '/static/icon4/about/3.png',  text: '如何充值', url: '/pages/about/pay' },
        { icon4: '/static/icon4/about/4.png',  text: '常见问题', url: '/pages/subpages/index?text=8' }
      ],
      gridList2: [
        { icon4: '/static/icon4/about/5.png',  text: '关于我们', url: '/pages/about/about' },
        { icon4: '/static/icon4/about/6.png',  text: '安全保障', url: '/pages/subpages/index?text=13' },
        { icon4: '/static/icon4/about/7.png',  text: '风控机构', url: '/pages/about/risk' },
        { icon4: '/static/icon4/about/8.png',  text: '企业资质', url: '/pages/subpages/index?text=17' },
        { icon4: '/static/icon4/about/9.png',  text: '会员等级', url: '/pages/subpages/index?text=18' },
        { icon4: '/static/icon4/about/10.png',  text: 'APP下载', url: '/pages/subpages/index?text=19' },
        { icon4: '/static/icon4/about/11.png',  text: '福利活动', url: '/pages/subpages/index?text=20' },
        { icon4: '/static/icon4/about/12.png',  text: '推广活动', url: '/pages/subpages/index?text=21' }
      ],
      gridList3: [
        { icon4: '/static/icon4/about/13.png',  text: '联系我们', url: '/pages/subpages/index?text=22' },
        { icon4: '/static/icon4/about/14.png',  text: '隐私政策', url: '/pages/subpages/index?text=23' },
        { icon4: '/static/icon4/about/15.png',  text: '用户协议', url: '/pages/subpages/index?text=24' },
        { icon4: '/static/icon4/about/16.png',  text: '防疫工作', url: '/pages/subpages/index?text=25' }
      ],
      gridList4: [
        { icon4: '/static/icon4/about/17.png',  text: '平台公告', url: '/pages/about/article' }
      ]
    }
  },
  methods: {
    gridChange1 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList1[index]
      uni.navigateTo({ url: item.url })
    },
    gridChange2 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList2[index]
      uni.navigateTo({ url: item.url })
    },
    gridChange3 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList3[index]
      switch (item.text){
        case '在线客服':
          uni.switchTab({ url: item.url })
          break;
        default:
          uni.navigateTo({ url: item.url })
          break;
      }
    },
    gridChange4 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList4[index]
      uni.navigateTo({ url: item.url })
    },
    carouselList () { // 广告图
      carouselList({
        type: '关于我们页面广告图'
      }).then(res => {
        this.banner = this.$hostsUrl + res.response.data[0].img_url
      })
    }
  },
  mounted () {
    this.carouselList()
  }
}
</script>

<style lang="less" scoped>
.about{
	padding-top: 40rpx;
	padding-bottom: 40rpx;
	.about-thumbnail{
		width: 100%;
		height: 360rpx;
    border-radius: 15rpx;
	}
	.about-title{
		font-size: 28rpx;
		color: #CBA65B;
		font-weight: bold;
		margin-top: 24rpx;
	}
  .grid{
    margin-top: 24rpx;
    padding: 18rpx 0;
    background: #fff;
    border-radius: 36rpx;
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
      // font-size: 20rpx;
      margin-top: 10rpx;
      line-height: 28rpx;
      color: #000;
    }
  }
}
</style>
