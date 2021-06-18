<!-- 关于我们 -->
<template>
	<view class="container about">
		<!-- 九宫格 -->
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
					{ image: '/static/image/about-register.png', text: '如何注册', url: '/pages/about/register' },
					{ image: '/static/image/about-invest.png', text: '如何投资', url: '/pages/about/invest' },
					{ image: '/static/image/about-pay.png', text: '如何充值', url: '/pages/about/pay' },
					{ image: '/static/image/about-qa.png', text: '常见问题', url: '/pages/about/qa' },
					{ image: '/static/image/about-notice.png', text: '公司公告', url: '/pages/about/notice' }
				],
				gridList2: [
					{ image: '/static/image/about-about.png', text: '关于我们', url: '/pages/about/about' },
					{ image: '/static/image/about-safeguard.png', text: '安全保障', url: '/pages/about/safeguard' },
					{ image: '/static/image/about-risk.png', text: '风控机构', url: '/pages/about/risk' },
					{ image: '/static/image/about-qualification.png', text: '企业资质', url: '/pages/about/qualification' },
					{ image: '/static/image/about-level.png', text: '会员等级', url: '/pages/about/level' },
					{ image: '/static/image/download.png', text: 'APP下载', url: '/pages/index/download' },
					{ image: '/static/image/about-welfare.png', text: '福利活动', url: '/pages/about/welfare' },
					{ image: '/static/image/about-expand.png', text: '推广活动', url: '/pages/about/expand' }
				],
				gridList3: [
					{ image: '/static/image/about-contact.png', text: '联系我们', url: '/pages/about/contact' },
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
			},
		}
	}
</script>

<style lang="less" scoped>
.about{
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
