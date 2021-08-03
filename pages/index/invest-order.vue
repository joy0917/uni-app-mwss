<!-- 立即投资 -->
<template>
  <view class="invest">
		<uni-list :border="false">
			<uni-list-item title="账户余额" :rightText="user_info.account_balance"></uni-list-item>
			<uni-list-item title="起投金额" :rightText="min_investment"></uni-list-item>
			<uni-list-item title="结息时间" rightText="满24小时自动结息"></uni-list-item>
		</uni-list>
		<uni-forms ref="form" :modelValue="editForm" label-width="100" class="invest-form mt5">
			<uni-forms-item label="投资金额" name="invest_amount">
				<uni-number-box v-model="editForm.invest_amount" :min="+min_investment" :max="100000000" :step="100" class="fr"></uni-number-box>
				<view class="f12 pl10 fr mt5">最低起投<text class="red">{{ min_investment }}</text>元，每次递增<text class="red">100</text>元</view>
			</uni-forms-item>
			<uni-forms-item label="交易密码" name="pay_password">
				<uni-easyinput type="password" clearable trim :inputBorder="false" v-model="editForm.pay_password" placeholder="默认为登录密码"/>
			</uni-forms-item>
			<button type="primary" class="submitbtn" @click="submitForm">立即投资</button>
		</uni-forms>
  </view>
</template>

<script>
import { investOrder } from '@/static/api/api'
import { updateUser } from '@/static/libs/common'
export default {
  data () {
    return {
      product_id: null,
      min_investment: null,
      editForm: {
        invest_project_id: null,
        invest_amount: null,
        pay_password: null
      }
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    submitForm () {
      if (!this.editForm.invest_amount) {
        uni.showToast({ title: '请输入投资金额', icon: 'none' })
        return
      }
      if (this.editForm.invest_amount < this.min_investment) {
        uni.showToast({ title: '投资金额必须大于等于起投金额', icon: 'none' })
        return
      }
      if (this.editForm.invest_amount%100 !== 0) {
        uni.showToast({ title: '投资金额每次需递增100元', icon: 'none' })
        return
      }
      if (!this.editForm.pay_password) {
        uni.showToast({ title: '请输入交易密码', icon: 'none' })
        return
      }
      investOrder({
        ...this.editForm,
        invest_project_id: this.product_id
      }).then(res => {
        uni.showModal({
          title: '提示',
          content: '下单成功',
          showCancel: false,
          success: () => {
            updateUser()
            uni.switchTab({ url: '/pages/user/index' })
          }
        })
      })
    }
  },
  onLoad (option) {
    this.product_id = option.id
    this.min_investment = option.min
    this.editForm.invest_amount = this.min_investment
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.invest{
  padding: 10rpx 0;
	.invest-form{
		padding: 0 30rpx;
	}
  .submitbtn{
    color: @default;
    background: @warning;
  }
  /deep/.uni-numbox{
    width: 320rpx;
    .uni-numbox__value{
      width: 180rpx;
    }
  }
}
</style>
