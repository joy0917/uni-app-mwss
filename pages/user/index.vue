<!-- 会员中心 -->
<template>
	<view class="container">
		<!-- 用户信息 -->
		<view class="top">
			<view>
				<text>我的账号：</text><text>{{ user_info.phone }}</text>
			</view>
			<view>
				<text>用户等级：</text><text>VIP {{ user_info.vip_level || 0 }}</text>
			</view>
		</view>
		<!-- 账户信息 -->
		<view class="card">
			<view class="one">
				<text>账户余额（元）</text>
			</view>
			<view class="two">
				<text>{{ money }}</text>
			</view>
			<view class="normal">
				<text>成长值：{{ growthValue }}</text>
			</view>
			<view class="normal">
				<text>我的积分：{{ point }}</text>
			</view>
			<view class="normal">
				<text>我的ID：{{ user_info.id }}</text>
			</view>
			<view class="last">
				<view class="left">
					<text>待收利息（元）</text>
					<text class="num">{{ interestAmount }}</text>
				</view>
				<view class="right">
					<text>待收本金（元）</text>
					<text class="num">{{ principalAmount }}</text>
				</view>
			</view>
		</view>
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
		<!-- 退出 -->
		<button type="default" class="logout" @click="logout">安全退出</button>
	</view>
</template>

<script>
import { checkLogin, userSignin } from '@/static/libs/common'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      money: '34.00', // 余额
      growthValue: '0', // 成长值
      point: '0', // 积分
      id: '533333',
      interestAmount: '0', // 利息
      principalAmount: '0', // 本金
      gridList1: [
        { image: '/static/image/signin.png', text: '每日签到', url: null },
        { image: '/static/image/fundsBreakdown.png', text: '资金明细', url: '/pages/user/log-fund' },
        { image: '/static/image/investmentRecord.png', text: '投资记录', url: '/pages/user/log-invest' },
        { image: '/static/image/earningsRecord.png', text: '收益记录', url: '/pages/user/log-earnings' },
        { image: '/static/image/rechargeRecord.png', text: '充值记录', url: '/pages/user/log-pay' },
        { image: '/static/image/cashWithdrawalRecords.png', text: '提现记录', url: '/pages/user/log-withdraw' },
        { image: '/static/image/pointsMall.png', text: '积分商城', url: '/pages/integral/index' },
        { image: '/static/image/promotions.png', text: '福利活动', url: '/pages/subpages/index?text=20' }
      ],
      gridList2: [
        { image: '/static/image/message.png', text: '站内消息', url: '/pages/user/message' },
        { image: '/static/image/invite.png', text: '邀请好友', url: '/pages/index/invite' },
        { image: '/static/image/service2.png', text: '在线客服', url: '/pages/service/index' }
      ],
      gridList3: [
        { image: '/static/image/accountSecurity.png', text: '账户安全', url: '/pages/user/set' },
        { image: '/static/image/realNameAuthentication.png', text: '实名认证', url: '/pages/user/auth' },
        { image: '/static/image/bankCardBinding.png', text: '银行卡绑定', url: '/pages/user/bank' }
      ]
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    ...mapMutations([
      'setUserInfo'
    ]),
    gridChange1 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList1[index]
      switch (item.text){
        case '每日签到':
          userSignin()
          break;
        case '积分商城':
          uni.switchTab({ url: item.url })
          break;
        default:
          uni.navigateTo({ url: item.url })
          break;
      }
    },
    gridChange2 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList2[index]
      switch (item.text){
        case '在线客服':
          uni.switchTab({ url: item.url })
          break;
        default:
          uni.navigateTo({ url: item.url })
          break;
      }
    },
    gridChange3 (e) { // 九宫格切换
      let { index } = e.detail
      let item = this.gridList3[index]
      uni.navigateTo({ url: item.url })
    },
    logout () { // 退出
      this.setUserInfo({})
      uni.navigateTo({ url: '/pages/user/login' })
    }
  },
  mounted () {
    console.log(this.user_info)
  },
  onShow () {
    checkLogin()
  }
}
</script>

<style scoped lang="less">
	.container {
		padding: 24rpx 40rpx;
		box-sizing: border-box;
		min-height: calc(100vh - 188rpx);
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			color: #cca75d;
			line-height: 40rpx;
		}
		.card {
			margin-top: 42rpx;
			width: 100%;
			background: linear-gradient(180deg, #E8D49A 0%, #CDA961 100%);
			border-radius: 36rpx;
			padding: 36rpx 0;
			text-align: center;
			.one {
				color: #875A00;
				font-size: 28rpx;
				line-height: 40rpx;
			}
			.two {
				color: #000;
				font-size: 36rpx;
				line-height: 50rpx;
				margin-top: 10rpx;
				margin-bottom: 6rpx;
			}
			.normal {
				color: #875A00;
				font-size: 24rpx;
				line-height: 34rpx;
				margin-top: 2rpx;
			}
			.last {
				margin-top: 18rpx;
				padding: 0 108rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					color: #875A00;
					font-size: 20rpx;
					line-height: 28rpx;
					display: flex;
					flex-direction: column;
				}
				.right {
					color: #875A00;
					font-size: 20rpx;
					line-height: 28rpx;
					display: flex;
					flex-direction: column;
				}
				.num {
					color: #000;
					font-size: 36rpx;
					line-height: 50rpx;
				}
			}
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
		.logout {
			border-radius: 16rpx;
			background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
			width: 100%;
			height: 104rpx;
			line-height: 104rpx;
			color: #fff;
			font-size: 32rpx;
			text-align: center;
			border: none;
			margin-top: 22rpx;
		}
	}
</style>
