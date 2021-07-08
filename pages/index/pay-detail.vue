<!-- 充值说明 -->
<template>
	<view class="subpages" v-html="detail.content"></view>
</template>

<script>
import { chargeDetail } from '@/static/api/api'
export default {
	data() {
		return {
			detail: {}
		}
	},
	onLoad(options) {
		this.chargeDetail(options.type)
	},
	methods: {
		chargeDetail(type) {
			chargeDetail({ type }).then(res => {
				this.detail = res.response
				this.detail.content = this.detail.content.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
			})
		}
	}
}
</script>

<style lang="less" scoped>
img {
	display: block !important;
	max-width: 100% !important;
}
.subpages {
	padding: 10rpx;
}
</style>
