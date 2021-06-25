<!-- 马上充值 -->
<template>
	<view class="pay">
    <uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="10">
      <uni-group>
        <uni-title type="h3" title="充值金额"></uni-title>
          <uni-forms-item label="¥" name="amount">
            <uni-easyinput type="number" :inputBorder="false" trim v-model="editForm.amount" placeholder="请输入充值金额" />
          </uni-forms-item>
        <view>可用金额<text class="blue">{{ user_info.account_balance }}</text>元</view>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="充值方式"></uni-title>
        <uni-forms-item name="type">
          <uni-data-checkbox v-model="editForm.type" :localdata="typeList"></uni-data-checkbox>
        </uni-forms-item>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="充值说明"></uni-title>
        <view class="mb5">尊敬的美湾盛世会员：</view>
        <view class="mb10">因活动期间公司充值会员众多，财务收款充值账户需及时结算对账，充值收款账户会不定时更新，请广大会员账户入款最新充值财务账户，每次充值前都需要在 App 首页点击【马上充值】【选择手机银行转账入款】复制最新银行入款财务账号充值或联系在线客服索取最新账号充值，切勿不提交充值直接转账之前财务收款账户，以免充值未能及时到账！</view>
        <view>【温馨提示】1.请您充值的金额与您实际输入充值的金额提交一致的资金，方便系统自动识别入款；2.使用网银手机银行转账汇款充值通道：<text class="red">单笔充值1万元及以上可享2%的充值返利奖励，单笔充值50万以上可享3%的充值返利奖励，</text>次次充，次次返，返利无上限！3.到期返本收益未提现，直接复投任何项目，单笔复投1万元及以上奖励3%资金返现，复投成功后联系在线客服领取返现奖励！如遇到充值问题，请您及时咨询在线客服，谢谢！</view>
      </uni-group>
      <view class="pay-btn">
        <button type="primary" class="submitbtn" @click="submitForm">立即充值</button>
      </view>
    </uni-forms>
	</view>
</template>

<script>
import { updateUser } from '@/static/libs/common'
export default {
  data () {
    return {
      editForm: {
        amount: null,
        type: null
      },
      rules: {
        amount: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        type: {
          rules: [{ required: true, errorMessage: '请选择' }]
        }				
      },
      typeList: [
        { value: 1, text: '微信-扫码支付充值通道-微信专扫' },
        { value: 2, text: '支付宝快捷充值通道-充值返现2% - 3%' }
      ]
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
        console.log('表单返回得值：', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
	.pay{
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
  .pay-btn{
    padding: 30rpx;
    background: #fff;
  }
</style>
