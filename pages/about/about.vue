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
			{ url: '', title: '公司简介' },
			{ url: '', title: '企业文化' },
			{ url: '', title: '企业宗旨' }
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
