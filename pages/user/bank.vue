<!-- 银行卡列表 -->
<template>
	<view class="bank">
		<uni-card title="储蓄卡" extra="中国工商银行" class="bankcard" isShadow @click="cardClick">
			622 7002 5103 1033 8775
		</uni-card>
    <navigator url="/pages/user/bind" class="bankcard-btn">添加银行卡</navigator>
	</view>
</template>

<script>
import { bankcardList, delBankcard } from '@/static/api/api'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    bankcardList () {
      bankcardList(this.user_info.id).then(res => {

      })
    },
    cardClick () {
      uni.showModal({
        title: '提示',
        content: '确定解绑该银行卡吗？',
        success: () => {
        }
      })
    }
  },
  mounted () {
    this.bankcardList()
  }
}
</script>

<style lang="less" scoped>
.bank{
	.bankcard-btn{
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    border-radius: 10rpx;
    font-size: 28rpx;
		background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
		color: #FFFFFF;
		margin: 30rpx;
	}
}
</style>
