<!-- 马上充值 -->
<template>
	<view class="pay">
    <view class="pay-card">
      <view class="f13 mb5">
        <text class="vm">账号余额(元)</text>
        <img class="vm ml5" src="/static/image/eye1.png" width="20" @click="closeEye = true" v-if="!closeEye">
        <img class="vm ml5" src="/static/image/eye2.png" width="20" @click="closeEye = false" v-else>
      </view>
      <view class="f16">
        <text v-if="!closeEye">{{ user_info.account_balance }}</text>
        <text v-else>******</text>
      </view>
    </view>
    <uni-forms>
      <uni-group>
		    <text class="f16">充值金额</text>
        <uni-forms-item label="¥" :label-width="10" name="amount">
          <uni-easyinput type="number" :inputBorder="false" trim v-model="editForm.amount" placeholder="请输入充值金额"/>
        </uni-forms-item>
        <uni-forms-item label="付款卡号" :label-width="75" name="card_code">
          <uni-easyinput type="number" :inputBorder="false" trim v-model="editForm.card_code" placeholder="请输入付款卡号"/>
        </uni-forms-item>
        <uni-forms-item label="付款姓名" :label-width="75" name="name">
          <uni-easyinput :inputBorder="false" trim v-model="editForm.name" placeholder="请输入付款姓名"/>
        </uni-forms-item>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="选择支付方式"></uni-title>
        <radio-group @change="radioChange">
          <label v-for="(item, index) in typeData" :key="item.index">
            <view class="mb10">
              <img src="/static/image/card.png" width="25" class="vm mr10">
              <text class="vm f14">{{item.text}}</text>
              <radio :value="item.value" class="fr" style="transform:scale(0.8)"/>
            </view>
          </label>
        </radio-group>
      </uni-group>
      <uni-group>
        <button type="primary" class="submitbtn" @click="submitForm">马上充值</button>
        <uni-title type="h3" title="充值说明"></uni-title>
        <view class="mb5 f14">尊敬的开达兴盛会员：</view>
        <view class="mb10 f14">因活动期间公司充值会员众多，财务收款充值账户需及时结算对账，充值收款账户会不定时更新，请广大会员账户入款最新充值财务账户，每次充值前都需要在 App 首页点击【马上充值】【选择手机银行转账入款】复制最新银行入款财务账号充值或联系在线客服索取最新账号充值，切勿不提交充值直接转账之前财务收款账户，以免充值未能及时到账！</view>
        <view class="f14">【温馨提示】1.请您充值的金额与您实际输入充值的金额提交一致的资金，方便系统自动识别入款；2.使用网银手机银行转账汇款充值通道：<text class="red">单笔充值1万元及以上可享2%的充值返利奖励，单笔充值50万以上可享3%的充值返利奖励，</text>次次充，次次返，返利无上限！3.到期返本收益未提现，直接复投任何项目，单笔复投1万元及以上奖励3%资金返现，复投成功后联系在线客服领取返现奖励！如遇到充值问题，请您及时咨询在线客服，谢谢！</view>
      </uni-group>
    </uni-forms>
	</view>
</template>

<script>
import { checkRealAuth } from '@/static/libs/common'
import { chargeList, userCharge } from '@/static/api/api'
export default {
  data () {
    return {
      current: 0,
      closeEye: false,
      editForm: {
        amount: null,
        card_code: null,
        name: null,
        type: null
      },
      typeData: []
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    radioChange (e) {
      this.editForm.type = e.detail.value
    },
    chargeList () {
      chargeList().then(res => {
        this.typeData = res.response.map(res => {
          return {
            value: res.type,
            text: res.title
          }
        })
      })
    },
    submitForm () {
      if (!checkRealAuth()) {
        return
      }
      if (!this.editForm.amount) {
				uni.showToast({ title: '请输入充值金额', icon: 'none' })
        return
      }
      if (this.editForm.amount < 500) {
				uni.showToast({ title: '至少充值500元', icon: 'none' })
        return
      }
      if (!this.editForm.card_code) {
				uni.showToast({ title: '请输入付款卡号', icon: 'none' })
        return
      }
      if (!this.editForm.name) {
				uni.showToast({ title: '请输入付款姓名', icon: 'none' })
        return
      }
      if (!this.editForm.type) {
				uni.showToast({ title: '请选择充值方式', icon: 'none' })
        return
      }
      userCharge(this.editForm).then(res => {
        if (this.editForm.type === '3') {
          uni.navigateTo({ url: `/pages/index/pay-card?amount=${this.editForm.amount}&id=${res.response.id}` })
        } else {
          uni.navigateTo({ url: `/pages/index/pay-detail?type=${this.editForm.type}` })
        }
      })
    }
  },
  mounted () {
    this.chargeList()
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.pay{
  background: #F0F0F0;
  font-size: 24rpx;
  border-top: 1px solid #F0F0F0;
  .pay-card{
    margin: 15px;
    padding: 15px;
    color: @default;
    background: @warning;
    border-radius: 8px;
  }
  .blue{
    font-weight: bold;
    padding: 0 10rpx;
    font-size: 28rpx;
  }
  .submitbtn{
    color: @default;
    background: @warning;
  }
  /deep/.uni-forms-item__inner{
    padding-bottom: 0;
  }
  /deep/ .uni-forms-item__label .label-text{
    font-size: 18px;
  }
  /deep/ .uni-input-input{
    font-size: 18px;
  }
  /deep/.uni-easyinput__content-input{
    font-size: 18px;
  }
}
</style>
