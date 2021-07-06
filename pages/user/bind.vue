<!-- 银行卡绑定 -->
<template>
	<view class="bind">
		<uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="80">
			<uni-forms-item label="所属银行" required name="bank_name">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.bank_name" placeholder="请输入"/>
			</uni-forms-item>
			<uni-forms-item label="卡号" required name="bank_card_code">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.bank_card_code" placeholder="请输入"/>
			</uni-forms-item>
			<uni-forms-item label="开户行" required name="deposit_bank">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.deposit_bank" placeholder="请输入"/>
			</uni-forms-item>
			<uni-forms-item label="姓名" required name="real_name">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.real_name" placeholder="请输入"/>
			</uni-forms-item>
      <button type="primary" class="submitbtn" @click="submitForm">立即绑定</button>
		</uni-forms>
	</view>
</template>

<script>
import { bindBankcard } from '@/static/api/api'
export default {
  data () {
    return {
      editForm: {
        user_id: null,
        bank_name: null,
        bank_card_code: null,
        deposit_bank: null,
        real_name: null
      },
      rules: {
        bank_name: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        bank_card_code: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        deposit_bank: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        real_name: {
          rules: [{ required: true, errorMessage: '请输入' }]
        }
      }
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(res => {
        bindBankcard({
          ...this.editForm,
          user_id: this.user_info.id
        }).then(res => {
          uni.showModal({
            title: '提示',
            content: '绑定成功',
            showCancel: false,
            success: () => {
              uni.redirectTo({ url: '/pages/user/bank' })
            }
          })
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bind{
  padding: 40rpx;
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
}
</style>

