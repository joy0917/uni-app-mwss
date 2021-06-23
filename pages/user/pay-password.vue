
<!-- 修改支付密码 -->
<template>
	<view class="password">
		<uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="80">
			<uni-forms-item label="原登录密码" required name="old_password">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.old_password" placeholder="请输入"/>
			</uni-forms-item>
			<uni-forms-item label="新登录密码" required name="new_password">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.new_password" placeholder="请输入"/>
			</uni-forms-item>
			<uni-forms-item label="确认密码" required name="re_password">
				<uni-easyinput clearable trim :inputBorder="false" v-model="editForm.re_password" placeholder="请输入"/>
			</uni-forms-item>
      <button type="primary" class="submitbtn" @click="submitForm">立即修改</button>
		</uni-forms>
	</view>
</template>

<script>
import { setPayPassword } from '@/static/api/api'
export default {
  data () {
    return {
      editForm: {
        id: null,
        type: 2,
        old_password: null,
        new_password: null,
        re_password: null,
      },
      rules: {
        old_password: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        new_password: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        re_password: {
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
        setPayPassword({
          ...this.editForm,
          id: this.user_info.id
        }).then(res => {
          uni.showModal({
            title: '提示',
            content: '修改成功',
            showCancel: false,
            success: () => {
              uni.switchTab({
                url: '/pages/user/index'
              })
            }
          })
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.password{
  padding: 40rpx;
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
}
</style>
