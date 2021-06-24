<!-- 兑换记录 -->
<template>
	<view>
		<uni-list>
			<uni-list-item
        :title="item.product.title"
        :note="`${statusList[item.product.status]}`"
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
				orderData: [],
        statusList: [null, '待处理', '已发货', '已收货']
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