<!-- 会员中心 -->
<template>
	<view class="container">
		<!-- 账户信息 -->
		<view class="card">
      <uni-row class="card-top">
        <uni-col :span="12">
          <text class="f14">账户：</text>
          <text class="warning f16">{{ user_info.phone || '-' }}</text>
        </uni-col>
        <uni-col :span="12">
          <text class="f14">余额：</text>
          <text class="warning f16 fb">{{ getThousand(user_info.account_balance) }}</text>
          <text>元</text>
        </uni-col>
      </uni-row>
      <uni-row>
        <uni-col :span="12" class="mb10">
          <view class="f14">账户等级</view>
          <view class="warning">{{ user_info.vip && user_info.vip.name || '-' }}</view>
        </uni-col>
        <uni-col :span="12" class="mb10">
          <view class="f14">账户积分</view>
          <view class="warning">{{ getThousand(user_info.integral) }}</view>
        </uni-col>
        <uni-col :span="12">          
					<view class="f14">待收利息</view>
					<view><span class="warning f14 fb">{{ getThousand(user_info.rest_bonus) }}</span>元</view>
        </uni-col>
        <uni-col :span="12">
					<view class="f14">待收本金</view>
					<view><span class="warning f14 fb">{{ getThousand(user_info.capital) }}</span>元</view>
        </uni-col>
      </uni-row>
		</view>
    <uni-row class="mt15 mb15">
      <uni-col :span="12">
        <button type="default" class="card-btn" @click="gotoPay">充值</button>
      </uni-col>
      <uni-col :span="12">
        <button type="default" class="card-btn card-btn1" @click="gotoWithdraw">提现</button>
      </uni-col>
    </uni-row>
		<!-- 九宫格 -->
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
		<!-- <view class="grid">
			<uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange3">
				<uni-grid-item v-for="(item, index) in gridList3" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.icon4" class="image"/>
						<view class="text">{{ item.text }}</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view> -->
		<!-- 退出 -->
		<button type="default" class="logout" @click="logout">安全退出</button>
	</view>
</template>

<script>
import { checkLogin, updateUser, userSignin } from '@/static/libs/common'
import { getThousand } from '@/static/libs/libs'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      getThousand,
      gridList1: [
        { icon4: '/static/icon4/user/1.png', text: '投资记录', url: '/pages/user/log-invest' },
        { icon4: '/static/icon4/user/2.png', text: '充值记录', url: '/pages/user/log-pay' },
        { icon4: '/static/icon4/user/3.png', text: '收益记录', url: '/pages/user/log-earnings' },
        { icon4: '/static/icon4/user/4.png', text: '每日签到', url: null },
        { icon4: '/static/icon4/user/5.png', text: '资金明细', url: '/pages/user/log-fund' },
        { icon4: '/static/icon4/user/6.png', text: '提现记录', url: '/pages/user/log-withdraw' },
        // { icon4: '', text: '积分商城', url: '/pages/integral/index' },
        { icon4: '/static/icon4/user/7.png', text: '邀请好友', url: '/pages/index/invite' },
        { icon4: '/static/icon4/user/8.png', text: '福利活动', url: '/pages/subpages/index?text=20' }
      ],
      gridList2: [
        { icon4: '/static/icon4/user/9.png', text: '站内消息', url: '/pages/user/message' },
        // { icon4: '', text: '在线客服', url: '/pages/service/index' }
        { icon4: '/static/icon4/user/10.png', text: '账户安全', url: '/pages/user/set' },
        { icon4: '/static/icon4/user/11.png', text: '实名认证', url: '/pages/user/auth' },
        { icon4: '/static/icon4/user/12.png', text: '银行卡绑定', url: '/pages/user/bank' }
      ],
      gridList3: [
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
      'setUserInfo',
      'setUserChannelCode'
    ]),
    gotoPay () {
      uni.navigateTo({ url: `/pages/index/pay` })
    },
    gotoWithdraw () {
      uni.navigateTo({ url: `/pages/index/withdraw` })
    },
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
      this.setUserChannelCode('')
      uni.navigateTo({ url: '/pages/user/login' })
    }
  },
  mounted () {
    console.log(this.user_info)
  },
  onShow () {
    if (checkLogin()) {
      updateUser()
    }
  }
}
</script>

<style scoped lang="less">
@import '@/static/css/theme.less';
.container {
  padding: 24rpx 40rpx;
  box-sizing: border-box;
  min-height: calc(100vh - 188rpx);
  background: #F0F0F0 url('/static/image/hyzx-bg.png') no-repeat center top;
  background-size: 100%;
  .card {
    background: #ffffff;
    border-radius: 15px;
    padding: 15px;
    margin-top: 20px;
    text-align: center;
    .warning{
      color: @warning;
    }
    .card-top{
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
  .card-btn{
    border-radius: 16rpx;
    width: 80%;
    height: 70rpx;
    line-height: 70rpx;
    font-size: 14px;
    color: @default;
    background: @warning;
    &.card-btn1{
      background: @info;
    }
  }
  .grid{
    margin: 20px 0;
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
  .logout {
    border-radius: 16rpx;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 32rpx;
    text-align: center;
    border: none;
    margin-top: 22rpx;
    color: @default;
    background: @error;
  }
}
</style>
