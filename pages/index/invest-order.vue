<!-- 立即投资 -->
<template>
  <view class="invest">
		<uni-list :border="false">
			<uni-list-item title="账户余额" :rightText="user_info.account_balance"></uni-list-item>
			<uni-list-item title="起投金额" :rightText="min_investment"></uni-list-item>
			<uni-list-item title="结息时间" rightText="满24小时自动结息"></uni-list-item>
		</uni-list>
		<uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="100" class="invest-form mt5">
			<uni-forms-item label="投资金额" name="invest_amount">
				<uni-number-box v-model="editForm.invest_amount" :min="+min_investment" :max="100000000" :step="100" class="fr"></uni-number-box>
				<view class="f12 pl10 fr mt5">最低起投{{ min_investment }}元，每次递增100元</view>
			</uni-forms-item>
			<uni-forms-item label="交易密码" name="pay_password">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.pay_password" placeholder="默认为登录密码"/>
			</uni-forms-item>
			<button type="primary" class="submitbtn" @click="submitForm">立即投资</button>
		</uni-forms>
  </view>
</template>

<script>
import { investOrder } from '@/static/api/api'
export default {
  data () {
    return {
      product_id: null,
      min_investment: null,
      editForm: {
        invest_project_id: null,
        invest_amount: null,
        pay_password: null
      },
			rules: {
        invest_amount: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        pay_password: {
          rules: [{ required: true, errorMessage: '请输入' }]
        }
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
      this.$refs.form.validate().then((res)=>{
        investOrder({
          ...this.editForm,
          invest_project_id: this.product_id
        }).then(res => {

        })
      })
    }
  },
  onLoad (option) {
    this.product_id = option.id
    this.min_investment = option.min
  }
}
</script>

<style lang="less" scoped>
.invest{
  padding: 10rpx 0;
	.invest-form{
		padding: 0 30rpx;
	}
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
}
</style>
