<!-- 邀请好友 -->
<template>
	<view class="invite">
    <view class="qrcode">
      <view class="txt">邀请二维码</view>
      <tki-qrcode
        :val="user_info.my_recommend_code"
        :loadMake="true"></tki-qrcode>
      <view class="txt">推荐人ID：{{ user_info.id }}</view>
    </view>
    <view class="member">
      <view class="title">我推荐的会员</view>
      <uni-table border emptyText="暂无更多数据" >
        <!-- 表头行 -->
        <uni-tr>
          <uni-th width="25%" align="center" class="f12">用户ID</uni-th>
          <uni-th width="25%" align="center" class="f12">手机号码</uni-th>
          <uni-th width="25%" align="center" class="f12">代理等级</uni-th>
          <uni-th width="25%" align="center" class="f12">注册时间</uni-th>
        </uni-tr>
          <!-- 表格数据行 -->
        <template v-for="(item, index) in tableListData">
          <uni-tr :key="index">
            <uni-td align="center" class="f12">{{ item.id }}</uni-td>
            <uni-td align="center" class="f12">{{ item.tel }}</uni-td>
            <uni-td align="center" class="f12">{{ item.lv }}</uni-td>
            <uni-td align="center" class="f12">{{ item.date }}</uni-td>
          </uni-tr>
        </template>
      </uni-table>
    </view>
	</view>
</template>

<script>
import tkiQrcode from "@/components/tki-qrcode/tki-qrcode"
export default {
  data() {
    return {
      tableListData: [
        { id: '123', tel: '15600000000', lv: '1', date: '06-16 16:36' },
        { id: '456', tel: '15600000000', lv: '2', date: '06-15 15:30' },
        { id: '789', tel: '15600000000', lv: '3', date: '06-15 15:00' }
      ]
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  components: {
    tkiQrcode
  },
  mounted () {
    console.log(this.$store.state.user.user_info)
  }
}
</script>

<style lang="less" scoped>
.invite{
  background: #f8f8f8;
  font-size: 28rpx;
  .qrcode{
    text-align: center;
    margin-bottom: 40rpx;
    background: #fff;
    .txt{
      display: inline-block;
      padding: 10rpx 50rpx;
      border: 1px solid #CBA65B;
      border-radius: 40rpx;
      margin: 40rpx 0;
      background: #FFF6DE;
    }
  }
  .member{
    background: #fff;
    padding: 40rpx;
    .title{
      font-size: 30rpx;
      font-weight: 500;
      margin-bottom: 30rpx;
      border-left: 10rpx solid #CBA75C;
      padding-left: 20rpx;
    }
  }
}
</style>
