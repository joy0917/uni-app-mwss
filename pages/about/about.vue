
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
			{ url: '/pages/subpages/index?text=10', title: '公司简介' },
			{ url: '/pages/subpages/index?text=11', title: '企业文化' },
			{ url: '/pages/subpages/index?text=12', title: '企业宗旨' }
		]
    }
  }
}
</script>
