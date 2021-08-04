<!-- 银行卡绑定 -->
<template>
	<view class="bind">
		<uni-forms ref="form" :modelValue="editForm" label-width="80">
			<uni-forms-item label="所属银行" required name="bank_name">
        <uni-data-picker placeholder="请选择所属银行" popup-title="所属银行" :localdata="typeData" v-model="editForm.bank_name" class="bordernone">
        </uni-data-picker>
			</uni-forms-item>
			<uni-forms-item label="卡号" required name="bank_card_code">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.bank_card_code" placeholder="请输入卡号"/>
			</uni-forms-item>
			<uni-forms-item label="开户行" required name="deposit_bank">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.deposit_bank" placeholder="请输入开户行"/>
			</uni-forms-item>
			<uni-forms-item label="姓名" required name="real_name">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.real_name" placeholder="请输入姓名"/>
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
      typeData: [
        { value: '中国银行', text: '中国银行' },
        { value: '工商银行', text: '工商银行' },
        { value: '农业银行', text: '农业银行' },
        { value: '建设银行', text: '建设银行' },
        { value: '招商银行', text: '招商银行' },
        { value: '中信银行', text: '中信银行' },
        { value: '邮政银行', text: '邮政银行' },
        { value: '交通银行', text: '交通银行' },
        { value: '民生银行', text: '民生银行' },
        { value: '浦发银行', text: '浦发银行' },
        { value: '光大银行', text: '光大银行' },
        { value: '广发银行', text: '广发银行' }
      ],
      editForm: {
        user_id: null,
        bank_name: null,
        bank_card_code: null,
        deposit_bank: null,
        real_name: null
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
      if (!this.editForm.bank_name) {
				uni.showToast({ title: '请输入所属银行', icon: 'none' })
        return
      }
      if (!this.editForm.bank_card_code) {
				uni.showToast({ title: '请输入卡号', icon: 'none' })
        return
      }
      if (this.editForm.bank_card_code.length < 16) {
				uni.showToast({ title: '卡号有误，请重新输入', icon: 'none' })
        return
      }
      if (!this.editForm.deposit_bank) {
				uni.showToast({ title: '请输入开户行', icon: 'none' })
        return
      }
      if (!this.editForm.real_name) {
				uni.showToast({ title: '请输入姓名', icon: 'none' })
        return
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.bind{
  padding: 40rpx;
  .submitbtn{
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    color: @default;
    background: @warning;
  }
  .bordernone{
    /deep/ .input-value-border{
      border: none;
    }
  }
}
</style>

