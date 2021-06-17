<!-- 订单详情 -->
<template>
	<view class="order">
		<uni-list :border="false">
			<uni-list-item title="福鼎白茶" note="1118积分" thumb="/static/image/bg.png" thumbSize="lg" rightText="x1"></uni-list-item>
			<uni-list-item title="收货地址"></uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">地址:</text>
					<uni-easyinput v-model="formData.address" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">姓名:</text>					
					<uni-easyinput v-model="formData.name" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<text class="label">电话:</text>					
					<uni-easyinput v-model="formData.tel" :inputBorder="false" trim clearable placeholder="请输入" />
				</template>
			</uni-list-item>
			<uni-list-item>
				<template slot="body">
					<button type="primary" class="btn">立即兑换</button>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					address: null,
					name: null,
					tel: null
				}
			}
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
