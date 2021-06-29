<!-- 马上充值 -->
<template>
	<view class="pay">
    <uni-forms label-width="10">
      <uni-group>
        <uni-title type="h3" title="剩余金额"></uni-title>
        <view>¥<text class="blue">{{ user_info.account_balance }}</text>元</view>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="充值方式"></uni-title>
        <uni-forms-item name="type">
          <uni-data-checkbox v-model="editForm.type" :localdata="typeData" @change="change" class="w"></uni-data-checkbox>
        </uni-forms-item>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="充值说明"></uni-title>
        <view v-if="!editForm.content" class="red">请选择充值方式</view>
        <view v-else v-html="editForm.content" class="content"></view>
        <!-- <view class="mb5">尊敬的美湾盛世会员：</view> -->
        <!-- <view class="mb10">因活动期间公司充值会员众多，财务收款充值账户需及时结算对账，充值收款账户会不定时更新，请广大会员账户入款最新充值财务账户，每次充值前都需要在 App 首页点击【马上充值】【选择手机银行转账入款】复制最新银行入款财务账号充值或联系在线客服索取最新账号充值，切勿不提交充值直接转账之前财务收款账户，以免充值未能及时到账！</view>
        <view>【温馨提示】1.请您充值的金额与您实际输入充值的金额提交一致的资金，方便系统自动识别入款；2.使用网银手机银行转账汇款充值通道：<text class="red">单笔充值1万元及以上可享2%的充值返利奖励，单笔充值50万以上可享3%的充值返利奖励，</text>次次充，次次返，返利无上限！3.到期返本收益未提现，直接复投任何项目，单笔复投1万元及以上奖励3%资金返现，复投成功后联系在线客服领取返现奖励！如遇到充值问题，请您及时咨询在线客服，谢谢！</view> -->
      </uni-group>
    </uni-forms>
	</view>
</template>

<script>
import { chargeList } from '@/static/api/api'
export default {
  data () {
    return {
      editForm: {
        type: null,
        content: null
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
    change (e) {
      this.editForm.content = e.detail.data && e.detail.data.content.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
    },
    chargeList () {
      chargeList().then(res => {
        this.typeData = res.response.map(res => {
          return {
            value: res.type,
            text: res.title,
            content: res.content
          }
        })
      })
    }
  },
  mounted () {
    this.chargeList()
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
  .content{
    padding: 20rpx 0;
  }
</style>
