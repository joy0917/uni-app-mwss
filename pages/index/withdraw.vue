<!-- 快速提现 -->
<template>
	<view class="withdraw">
    <uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="10">
      <uni-group>
        <uni-forms-item label="银行卡" name="card" :label-width="50" class="mb0">
          <uni-data-picker placeholder="请选择" popup-title="银行卡" :localdata="cardList" v-model="editForm.card" class="ccc">
				  </uni-data-picker>
        </uni-forms-item>
      </uni-group>
      <uni-group margin-top="20">
        <uni-title type="h3" title="提现金额"></uni-title>
          <uni-forms-item label="¥" name="amount">
            <uni-easyinput type="number" :inputBorder="false" trim v-model="editForm.amount" placeholder="请输入" />
          </uni-forms-item>
        <view>可提现金额<text class="blue">34.00</text>元</view>
      </uni-group>
      <uni-group margin-top="20">
        <uni-forms-item label="交易密码" name="password" :label-width="60">
          <uni-easyinput type="text" autocomplete="off" :inputBorder="false" trim v-model="editForm.password" placeholder="请输入" />
        </uni-forms-item>
      </uni-group>
      <view class="p15">
        <button type="primary" class="submitbtn" @click="submitForm">立即提现</button>
      </view>
    </uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				editForm: {
          card: null,
					amount: null,
          password: null
				},
				rules: {
					card: {
						rules: [{ required: true, errorMessage: '请选择' }]
					},
          amount: {
						rules: [{ required: true, errorMessage: '请输入' }]
					},
          password: {
						rules: [{ required: true, errorMessage: '请输入' }]
					}			
				},
        cardList: [
          { value: 1, text: '123456789' },
          { value: 2, text: '987654321' }
        ]
			}
		},
		methods: {
			submitForm () {
				this.$refs.form.validate().then((res)=>{
					console.log('表单返回得值：', res)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.withdraw{
		background: #F0F0F0;
		font-size: 24rpx;
	}
	.blue{
		font-weight: bold;
		padding: 0 10rpx;
		font-size: 28rpx;
	}
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
</style>
