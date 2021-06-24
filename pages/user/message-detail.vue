<template>
	<view class="detail">
    <view class="title">{{ noticeData.title }}</view>
    <view v-html="noticeData.content"></view>
    <view class="date">{{ noticeData.created_at }}</view>
	</view>
</template>

<script>
import { noticeDetail } from '@/static/api/api'
export default {
  data() {
    return {
      noticeData: {}
    }
  },
  methods: {
    noticeDetail (id) {
      noticeDetail(id).then(res => {
        this.noticeData = res.response
      })
    }
  },
  onLoad (option) {
    this.noticeDetail(option.id)
  }
}
</script>

<style lang="less" scoped>
.detail{
  border: 5rpx dashed #eee;
  padding: 40rpx 20rpx;
  margin: 20rpx;
  font-size: 28rpx;
  .title{
    text-align: center;
    font-size: 30rpx;
    margin-bottom: 20rpx;
  }
  .date{
    margin-top: 20rpx;
    text-align: right;
    font-size: 24rpx;
  }
}
</style>
