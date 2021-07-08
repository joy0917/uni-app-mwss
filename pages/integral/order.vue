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
					<text class="label">手机号:</text>					
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
	import { productDetail, orderAdd } from '@/static/api/api'
import { updateUser } from '@/static/libs/common'
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
					this.detailFrom.bg_img = this.$hostsUrl + this.detailFrom.bg_img
				})
			},
			orderAdd () {
				if (!this.editForm.detail) {
					uni.showToast({ title: '请输入地址', icon: 'none' })
					return
				}
				if (!this.editForm.name) {
					uni.showToast({ title: '请输入姓名', icon: 'none' })
					return
				}
				if (!this.editForm.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' })
					return
				}
        let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
				if (!myreg.test(this.editForm.phone)) {
					uni.showToast({ title: '手机号格式有误', icon: 'none' })
					return
				}
				orderAdd(this.editForm).then(res => {
          uni.showModal({
            title: '提示',
            content: '兑换成功',
            showCancel: false,
            success: () => {
              updateUser()
              uni.navigateTo({ url: '/pages/integral/log' })
            }
          })
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
      color: #BA682E;
      background: linear-gradient(#F5D0B5, #E7B08F);
			width: 95%;
		}
	}
</style>
