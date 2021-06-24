<!-- 兑换记录 -->
<template>
	<view>
		<uni-list>
			<uni-list-item
        :title="item.product.title"
        :note="item.product.status"
        :thumb="item.product.bg_img"
        @click="itemClick(item.id)"
        thumbSize="lg" showArrow clickable v-for="(item, index) in orderData" :key="index">
      </uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { orderList } from '@/static/api/api'
	export default {
		data () {
			return {
				orderData: []
			}
		},
		methods: {
			itemClick (id) {
				uni.navigateTo({
					url: `/pages/integral/status?id=${id}`
				})
			},
      orderList () {
        orderList({
          per_page: 100,
          current_page: 1
        }).then(res => {
          this.orderData = res.response.data
        })
      }
		},
    mounted () {
      this.orderList()
    },
	}
</script>

<style lang="less" scoped>
</style>
