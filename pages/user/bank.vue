<!-- 银行卡列表 -->
<template>
	<view class="bank">
		<uni-card title="储蓄卡" :extra="item.deposit_bank" class="bankcard" isShadow @click="cardClick(item.id)" v-for="(item, index) in cardData" :key="index">
			{{ item.bank_card_code }}
		</uni-card>
    <navigator url="/pages/user/bind" open-type="redirect" class="bankcard-btn">添加银行卡</navigator>
	</view>
</template>

<script>
import { bankcardList, delBankcard } from '@/static/api/api'
export default {
  data () {
    return {
      cardData: []
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
        this.cardData = res.response
      })
    },
    cardClick (id) {
      uni.showModal({
        title: '提示',
        content: '确定解绑该银行卡吗？',
        success: (e) => {
          if (e.cancel) return
          delBankcard({id}).then(res => {
            uni.showToast({
              title: '解绑成功',
              icon: 'success'
            })
            this.bankcardList()
          })
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
@import '@/static/css/theme.less';
.bank{
  /deep/.bankcard{
    background: linear-gradient(to bottom,  #58a5e4 0%,#2b61a7 100%);
    .uni-card__header-title-text{
      color: #FFFFFF;
    }
    .uni-card__header-extra-text{
      color: #FFFFFF;
    }
    .uni-card__content{
      color: #FFFFFF;
    }
    .uni-border-bottom:after{
      border-bottom: none;
    }
  }
	.bankcard-btn{
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    border-radius: 10rpx;
    font-size: 28rpx;
		margin: 30rpx;
    color: @default;
    background: @warning;
	}
}
</style>
