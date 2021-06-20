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
			{ url: '', title: '银行存管' },
			{ url: '', title: '资金托管' },
			{ url: '', title: '保险协议' }
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
