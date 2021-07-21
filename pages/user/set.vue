<!-- 账户安全 -->
<template>
	<view class="account">
    <view class="account-head">
      <img :src="user_info.avatar" class="account-thumbnail" :onerror="defaultImg"/>
      <view class="mb5">手机号</view>
      <view>{{ user_info.phone }}</view>
    </view>
    <uni-grid :column="4" :highlight="false" :showBorder="false" @change="gridChange">
      <uni-grid-item v-for="(item, index) in gridData" :index="index" :key="index">
        <view class="grid-item-box">
          <image :src="item.icon3" class="image"/>
          <view class="text">{{ item.text }}</view>
        </view>
      </uni-grid-item>
    </uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        defaultImg: `this.src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg"`,
        gridData: [
          // { icon1: '/static/icon1/user/15.png', icon3: '/static/icon3/user/15.png', text: '实名认证', url: '/pages/user/auth' },
          { icon1: '/static/icon1/user/16.png', icon3: '/static/icon3/user/16.png', text: '修改登录密码', url: '/pages/user/login-password' },
          { icon1: '/static/icon1/user/17.png', icon3: '/static/icon3/user/17.png', text: '修改支付密码', url: '/pages/user/pay-password' }
        ]
			}
		},
    computed: {
      user_info () {
        return this.$store.state.user.user_info
      }
    },
    methods: {
      gridChange (e) { // 九宫格切换
        let { index } = e.detail
        let item = this.gridData[index]
        uni.navigateTo({ url: item.url })
      }
    }
	}
</script>

<style lang="less" scoped>
.account{
  padding: 60rpx 0;
  font-size: 26rpx;
  .account-head{
    text-align: center;
    margin-bottom: 60rpx;
    .account-thumbnail{
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      margin-bottom: 20rpx;
    }
  }
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
    font-size: 24rpx;
  }
}
</style>
