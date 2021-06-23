<!-- 关于我们 -->
<template>
	<view class="container about">
		<image src="@/static/image/bg.png" class="about-thumbnail"></image>
		<!-- 九宫格 -->
		<view class="about-title">新手指南</view>
		<view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange1">
				<uni-grid-item v-for="(item, index) in gridList1" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.image" class="image"/>
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
						<image :src="item.image" class="image"/>
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
						<image :src="item.image" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridList1: [
					{ image: '/static/image/about-register.png', text: '如何注册', url: '/pages/subpages/index?text=0' },
					{ image: '/static/image/about-invest.png', text: '如何投资', url: '/pages/subpages/index?text=1' },
					{ image: '/static/image/about-pay.png', text: '如何充值', url: '/pages/about/pay' },
					{ image: '/static/image/about-qa.png', text: '常见问题', url: '/pages/subpages/index?text=8' },
					{ image: '/static/image/about-notice.png', text: '公司公告', url: '/pages/subpages/index?text=9' }
				],
				gridList2: [
					{ image: '/static/image/about-about.png', text: '关于我们', url: '/pages/about/about' },
					{ image: '/static/image/about-safeguard.png', text: '安全保障', url: '/pages/subpages/index?text=13' },
					{ image: '/static/image/about-risk.png', text: '风控机构', url: '/pages/about/risk' },
					{ image: '/static/image/about-qualification.png', text: '企业资质', url: '/pages/subpages/index?text=17' },
					{ image: '/static/image/about-level.png', text: '会员等级', url: '/pages/subpages/index?text=18' },
					{ image: '/static/image/download.png', text: 'APP下载', url: '/pages/subpages/index?text=19' },
					{ image: '/static/image/about-welfare.png', text: '福利活动', url: '/pages/subpages/index?text=20' },
					{ image: '/static/image/about-expand.png', text: '推广活动', url: '/pages/subpages/index?text=21' }
				],
				gridList3: [
					{ image: '/static/image/about-contact.png', text: '联系我们', url: '/pages/subpages/index?text=22' },
					{ image: '/static/image/service2.png', text: '在线客服', url: '/pages/service/index' }
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
			}
		}
	}
</script>

<style lang="less" scoped>
.about{
	padding-bottom: 40rpx;
	.about-thumbnail{
		width: 100%;
		height: 360rpx;
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
      font-size: 20rpx;
      margin-top: 10rpx;
      line-height: 28rpx;
      color: #000;
    }
  }
}
</style>
