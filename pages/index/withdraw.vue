<!-- 快速提现 -->
<template>
	<view class="withdraw">
    <uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="10">
      <uni-group class="mb10">
        <uni-forms-item label="银行卡" :label-width="50" class="mb0" name="card_id">
          <uni-data-picker placeholder="请选择" popup-title="银行卡" :localdata="cardData" v-model="editForm.card_id" class="bordernone">
				  </uni-data-picker>
        </uni-forms-item>
      </uni-group>
      <uni-group class="mb10">
        <uni-title type="h3" title="提现金额"></uni-title>
          <uni-forms-item label="¥" name="cash_amount">
            <uni-easyinput type="number" :inputBorder="false" trim v-model="editForm.cash_amount" placeholder="请输入" />
          </uni-forms-item>
        <view>可提现金额<text class="blue">{{ user_info.account_balance }}</text>元</view>
      </uni-group>
      <uni-group class="mb10">
        <uni-forms-item label="交易密码" name="pay_password" :label-width="60">
          <uni-easyinput type="text" autocomplete="off" :inputBorder="false" trim v-model="editForm.pay_password" placeholder="请输入" />
        </uni-forms-item>
      </uni-group>
      <view class="withdraw-btn">
        <button type="primary" class="submitbtn" @click="submitForm">立即提现</button>
      </view>
    </uni-forms>
	</view>
</template>

<script>
import { bankcardList, cashOut } from '@/static/api/api'
import { updateUser } from '@/static/libs/common'
export default {
  data () {
    return {
      editForm: {
        card_id: null,
        cash_amount: null,
        pay_password: null
      },
      rules: {
        card_id: {
          rules: [{ required: true, errorMessage: '请选择' }]
        },
        cash_amount: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        pay_password: {
          rules: [{ required: true, errorMessage: '请输入' }]
        }			
      },
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
        this.cardData = res.response.map(res => {
          return {
            value: res.id,
            text: res.bank_card_code
          }
        })
      })
    },
    submitForm () {
      this.$refs.form.validate().then(res => {
        cashOut(this.editForm).then(res => {
          uni.showModal({
            title: '提示',
            content: '操作完成',
            showCancel: false,
            success: () => {
              updateUser()
              uni.navigateTo({ url: '/pages/user/log-withdraw' })
            }
          })
        })
      })
    }
  },
  mounted () {
    this.bankcardList()
  }
}
</script>

<style lang="less" scoped>
	.withdraw{
		background: #F0F0F0;
		font-size: 24rpx;
	}
	.blue{
		font-weight: bold;
		padding: 0 10rpx;
		font-size: 28rpx;
	}
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
  .withdraw-btn{
    padding: 30rpx;
    background: #fff;
  }
  .bordernone{
    /deep/ .input-value-border{
      border: none;
    }
  }
</style>
