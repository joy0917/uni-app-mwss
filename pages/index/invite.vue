<!-- 邀请好友 -->
<template>
	<view class="invite">
    <view class="qrcode">
      <view class="txt">邀请二维码</view>
      <image :src="qrImg" class="qrImg"/>
      <view class="txt">推荐码：{{ user_info.my_recommend_code }}</view>
    </view>
    <view class="member">
      <view class="title">我推荐的会员</view>
      <uni-table border emptyText="暂无更多数据" >
        <!-- 表头行 -->
        <uni-tr>
          <uni-th width="70" align="center" class="f12">用户ID</uni-th>
          <uni-th width="100" align="center" class="f12">手机号码</uni-th>
          <uni-th width="70" align="center" class="f12">代理等级</uni-th>
          <uni-th width="150" align="center" class="f12">注册时间</uni-th>
        </uni-tr>
          <!-- 表格数据行 -->
        <template v-for="(item, index) in tableListData">
          <uni-tr :key="index">
            <uni-td align="center" class="f12">{{ item.id }}</uni-td>
            <uni-td align="center" class="f12">{{ item.phone }}</uni-td>
            <uni-td align="center" class="f12">{{ item.proxy }}</uni-td>
            <uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
          </uni-tr>
        </template>
      </uni-table>
    </view>
	</view>
</template>

<script>
import { uploadDetail, myInvites, channelDetail } from '@/static/api/api'
export default {
  data() {
    return {
      tableListData: [],
      qrImg: ''
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    },
    channel_code () {
      return this.$store.state.user.user_channel_code
    }
  },
  methods: {
    channelDetail () {
      channelDetail({
        channel_code: this.channel_code
      }).then(res => {
        this.qrImg = this.$hostsUrl + res.response.invite_qrcode
      })
    },
    uploadDetail () {
      uploadDetail({
        type: '邀请好友二维码'
      }).then(res => {
        this.qrImg = this.$hostsUrl + res.response.img_url
      })
    },
    myInvites () {
      myInvites().then(res => {
        this.tableListData = res.response.map(res => {
          return {
            id: res.id,
            phone: res.phone,
            created_at: res.created_at,
            proxy: this.user_info.my_recommend_code === res.recommend_by ? 1 : 2
          }
        })
      })
    }
  },
  mounted () {
    if (this.channel_code) {
      this.channelDetail()
    } else {
      this.uploadDetail()
    }
    this.myInvites()
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
    .qrImg{
      display: block;
      margin: 0 auto;
      width: 200rpx;
      height: 200rpx;
    }
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
