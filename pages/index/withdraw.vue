<!-- 快速提现 -->
<template>
	<view class="withdraw">
    <uni-forms ref="form" :modelValue="editForm" label-width="10">
      <uni-group class="mb10">
        <uni-forms-item label="银行卡" :label-width="50" name="card_id">
          <uni-data-picker placeholder="请选择" popup-title="银行卡" :localdata="cardData" v-model="editForm.card_id" @change="pickerChange" class="bordernone">
				  </uni-data-picker>
        </uni-forms-item>
        <!-- <view class="link" @click="gotoBind">前去绑定银行卡</view> -->
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
          <uni-easyinput type="password" autocomplete="off" :inputBorder="false" trim v-model="editForm.pay_password" placeholder="请输入" />
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
      cardData: []
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    pickerChange (e) {
      if (e.detail.value[0].value === '银行卡') {
        uni.navigateTo({ url: '/pages/user/bank' })
      }
    },
    // gotoBind () {
    //   uni.navigateTo({ url: '/pages/user/bank' })
    // },
    bankcardList () {
      bankcardList(this.user_info.id).then(res => {
        this.cardData = res.response.map(res => {
          return {
            value: res.id,
            text: res.bank_card_code
          }
        })
        this.cardData.push({
          value: '银行卡',
          text: '点击添加银行卡'
        })
      })
    },
    submitForm () {
      if (!this.editForm.card_id) {
				uni.showToast({ title: '请选择银行卡', icon: 'none' })
        return
      }
      if (!this.editForm.cash_amount) {
				uni.showToast({ title: '请输入提现金额', icon: 'none' })
        return
      }
      if (+this.editForm.cash_amount < 500 || +this.editForm.cash_amount > +this.user_info.account_balance) {
				uni.showToast({ title: '提现金额不能小于500元，不能大于可提现金额', icon: 'none' })
        return
      }
      if (!this.editForm.pay_password) {
				uni.showToast({ title: '请输入交易密码', icon: 'none' })
        return
      }
      cashOut(this.editForm).then(res => {
        uni.showModal({
          title: '提示',
          content: '操作完成',
          showCancel: false,
          success: () => {
            updateUser()
            // uni.switchTab({ url: '/pages/index/index' })
            this.editForm = {
              card_id: null,
              cash_amount: null,
              pay_password: null
            }
          }
        })
      })
    }
  },
  onShow () {
    this.editForm = {
      card_id: null,
      cash_amount: null,
      pay_password: null
    }
    this.bankcardList()
  }
}
</script>

<style lang="less" scoped>
	.withdraw{
		background: #F0F0F0;
		font-size: 24rpx;
    .blue{
      font-weight: bold;
      padding: 0 10rpx;
      font-size: 28rpx;
    }
    .submitbtn{
      color: #BA682E;
      background: linear-gradient(#F5D0B5, #E7B08F);
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
    /deep/ .uni-forms-item__inner{
      padding-bottom: 0;
    }
    .link{
      text-decoration: underline;
      color: #2d8cf0;
      font-size: 24rpx;
    }
    /deep/ .uni-scroll-view-content{
      .item:last-child{
        text-align: center;
        .item-text{
          color: #007aff;
        }
      }
    }
	}
</style>
