<template>
	<view class="container calculator">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="投资金额" required name="amount">
				<uni-easyinput type="number" :clearable="false" :trim="true" v-model="formData.amount" placeholder="请输入" />
				<text class="extra">元</text>
			</uni-forms-item>
			<uni-forms-item label="投资期限" required name="limit">
				<uni-easyinput type="number" :clearable="false" :trim="true" v-model="formData.limit" placeholder="请输入" />
				<text class="extra">日</text>
			</uni-forms-item>
			<uni-forms-item label="日化利率" required name="rate">
				<uni-easyinput type="number" :clearable="false" :trim="true" v-model="formData.rate" placeholder="请输入" />
				<text class="extra">%</text>
			</uni-forms-item>
			<uni-forms-item label="还款方式" required name="type">
				<uni-data-picker placeholder="请选择" popup-title="还款方式" :localdata="typeList" v-model="formData.type">
				</uni-data-picker>
			</uni-forms-item>
			<uni-row :gutter="30">
				<uni-col :span="12">
					<button type="primary" class="submitbtn" @click="submitForm">计算收益</button>
				</uni-col>
				<uni-col :span="12">
					<button type="default" @click="resetForm">重新计算</button>
				</uni-col>
			</uni-row>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				typeList: [
					{ value: 1, text: '每日返息，到期还本' },
					{ value: 2, text: '到期还本还息' },
					{ value: 3, text: '每周返息，到期还本' },
					{ value: 4, text: '每月返息，到期还本' },
					{ value: 5, text: '每日复利，保本保息' }
				],
				formData: {
					amount: null,
					limit: null,
					rate: null,
					type: null
				},
				rules: {
					amount: {
						rules: [{ required: true, errorMessage: '请输入' }]
					},
					limit: {
						rules: [{ required: true, errorMessage: '请输入' }]
					},
					rate: {
						rules: [{ required: true, errorMessage: '请输入' }]
					},
					type: {
						rules: [{ required: true, errorMessage: '请输入' }]
					}
				}
			}
		},
		methods: {
			submitForm () {
				this.$refs.form.validate().then((res)=>{
					console.log('表单返回得值：', res)
				})
			},
			resetForm () {
				this.$refs.form.resetFields()
			},
		}
	}
</script>

<style lang="less" scoped>
	.calculator{
		background: #fff;
		padding-top: 40rpx;
		.extra{
			position: absolute;
			right: 20rpx;
			top: 18rpx;
		}
		.submitbtn{
			background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
		}
	}
</style>
