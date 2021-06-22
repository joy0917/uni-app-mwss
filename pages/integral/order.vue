<!-- 订单详情 -->
<template>
	<view class="order">
		<uni-list :border="false">
			<uni-list-item :title="detailFrom.title" :note="`${ detailFrom.integral }积分`" :thumb="detailFrom.bg_img" thumbSize="lg" rightText="x1"></uni-list-item>
			<uni-list-item title="收货地址"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">地址:</text>
					<uni-easyinput v-model="editForm.detail" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">姓名:</text>					
					<uni-easyinput v-model="editForm.name" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">电话:</text>					
					<uni-easyinput v-model="editForm.phone" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<button type="primary" class="btn" @click="orderAdd">立即兑换</button>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { productDetail, orderAdd } from 'static/api/api'
	export default {
		data() {
			return {
				detailFrom: {},
				editForm: {
					product_id: null,
					detail: null,
					name: null,
					phone: null
				}
			}
		},
		methods: {
			productDetail (id) { // 商品详情
				productDetail(id).then(res => {
					this.detailFrom = res.response
				})
			},
			orderAdd () {
				if (!this.editForm.detail) {
					uni.showToast({
						title: '请输入地址',
						icon: 'none'
					})
					return
				}
				if (!this.editForm.name) {
					uni.showToast({
						title: '请输入姓名',
						icon: 'none'
					})
					return
				}
				if (!this.editForm.phone) {
					uni.showToast({
						title: '请输入电话',
						icon: 'none'
					})
					return
				}
				orderAdd(this.editForm).then(res => {
					
				})
			}
		},
		onLoad(options) {
			this.editForm.product_id = options.id
			this.productDetail(options.id)
		}
	}
</script>

<style lang="less" scoped>
	.order{
		.list-img{
			width: 128rpx;
			height: 128rpx;
		}
		.label{
			padding-top: 16rpx;
			font-size: 28rpx;
		}
		.btn{
			background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
			width: 90%;
		}
	}
</style>
