
<template>
  <view>
    <uni-list>
		<template v-for="(item, index) in payTipsList">
			<uni-list-item :key="index" :title="item.title" link :to="item.url"></uni-list-item>
		</template>
    </uni-list>
  </view>
</template>

<script>
export default {
  data () {
    return {
		payTipsList: [
			{ url: '/pages/subpages/index?text=2', title: '银行入款充值步骤' },
			{ url: '/pages/subpages/index?text=3', title: '支付宝扫码充值步骤' },
			{ url: '/pages/subpages/index?text=4', title: '微信扫码充值步骤' },
			{ url: '/pages/subpages/index?text=5', title: '支付宝转账到银行卡充值步骤' },
			{ url: '/pages/subpages/index?text=6', title: '微信转账到银行卡充值步骤' },
			{ url: '/pages/subpages/index?text=7', title: '支付宝转账支付宝账号步骤' }
		]
    }
  }
}
</script>