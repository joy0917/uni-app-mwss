
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
			{ url: '/pages/subpages/index?text=14', title: '银行存管' },
			{ url: '/pages/subpages/index?text=15', title: '资金托管' },
			{ url: '/pages/subpages/index?text=16', title: '保险协议' }
		]
    }
  }
}
</script>
