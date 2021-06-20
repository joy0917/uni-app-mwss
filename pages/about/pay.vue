<!-- 如何充值 -->
<template>
  <view>
    <uni-list>
		<template v-for="(item, index) in payTipsList">
			<uni-list-item :key="index" :title="item.title" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
		</template>
    </uni-list>
  </view>
</template>

<script>
export default {
  data () {
    return {
		payTipsList: [
			{ url: '', title: '银行入款充值步骤' },
			{ url: '', title: '支付宝扫码充值步骤' },
			{ url: '', title: '微信扫码充值步骤' },
			{ url: '', title: '支付宝转账到银行卡充值步骤' },
			{ url: '', title: '微信转账到银行卡充值步骤' },
			{ url: '', title: '支付宝转账支付宝账号步骤' }
		]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
</style>
