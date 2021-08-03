<!-- 充值说明 -->
<template>
	<view class="carddetail">
		<uni-list>
			<uni-list-item>
				<template slot="body">
          <text class="t1">收款人: </text>
          <text class="t2">{{ resForm.account_name }}</text>
				</template>
				<template slot="footer">
					<button type="primary" size="mini" plain class="copybtn" @click="copyData(resForm.account_name)">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
          <text class="t1">银行信息: </text>
          <text class="t2">{{ resForm.bank_name }}</text>
				</template>
				<template slot="footer">
					<button type="primary" size="mini" plain class="copybtn" @click="copyData(resForm.bank_name)">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
          <text class="t1">银行卡号: </text>
          <text class="t2">{{ resForm.account_code }}</text>
				</template>
				<template slot="footer">
					<button type="primary" size="mini" plain class="copybtn" @click="copyData(resForm.account_code)">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
          <text class="t1">充值金额:</text>
          <text class="t2">{{ baseForm.amount }}</text>
				</template>
				<template slot="footer">
					<button type="primary" size="mini" plain class="copybtn" @click="copyData(baseForm.amount)">复制</button>
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
          <text class="t3">支付方式</text>
				</template>
			</uni-list-item>
      <template v-for="(item, index) in typeData">
        <uni-list-item :title="item.title" :note="item.desc" :thumb="item.icon" thumbSize="lg" :key="index"></uni-list-item>
      </template>
		</uni-list>
    <view class="pay-btn">
      <button type="primary" class="submitbtn" @click="submitForm">我已充值</button>
    </view>
  </view>
</template>

<script>
import { chargeDetail, alreadyCharge } from '@/static/api/api'
import { setClipboardData } from '@/uni_modules/u-clipboard/js_sdk'
export default {
	data() {
		return {
			baseForm: {
        amount: '',
        id: ''
      },
      resForm: {
        account_name: '',
        account_code: '',
        bank_name: ''
      },
      typeData: [
        { title: '银联APP付款', desc: '打开银行卡APP>点击转账>复制上方收款人信息>完成付款', icon: '/static/image/k1.png' },
        { title: '微信付款', desc: '打开微信>点击+>点击收付款>点击最底下银行卡转账>复制上方收款人信息>完成支付', icon: '/static/image/k2.png' },
        { title: '支付宝付款', desc: '打开支付宝>点击转账>点击转账到银行卡>复制上方收款人信息>完成支付', icon: '/static/image/k3.png' }
      ]
		}
	},
	onLoad(options) {
    this.baseForm = options
		this.chargeDetail()
	},
	methods: {
		chargeDetail() {
			chargeDetail({ type: '3' }).then(res => {
				this.resForm = res.response
			})
		},
    copyData (key) {
      setClipboardData(key).then(res => {
        console.log('success')
      })
    },
    submitForm () {
      alreadyCharge({ id: this.baseForm.id }).then(res => {
        uni.showModal({
          title: '提示',
          content: '操作成功，请等待审核',
          showCancel: false,
          success: () => {
            uni.switchTab({ url: '/pages/index/index' })
          }
        })
      })
    }
	}
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.carddetail{
  .t1{
    font-size: 28rpx;
    margin-top: 12rpx;
    display: inline-block;
    width: 150rpx;
  }
  .t2{
    font-size: 28rpx;
    margin-top: 12rpx;
    font-weight: bold;
  }
  .t3{
    font-size: 32rpx;
    font-weight: bold;
  }
  .copybtn{
    margin-right: 0;
  }
  .submitbtn{
    color: @default;
    background: @warning;
  }
  .pay-btn{
    margin-top: 20rpx;
    padding: 30rpx;
    background: #fff;
  }
}
</style>
