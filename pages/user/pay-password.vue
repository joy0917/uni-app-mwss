
<!-- 修改支付密码 -->
<template>
	<view class="password">
		<uni-forms ref="form" :modelValue="editForm" label-width="80">
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
      if (!this.editForm.old_password) {
				uni.showToast({ title: '请输入原登录密码', icon: 'none' })
        return
      }
      if (!this.editForm.new_password) {
				uni.showToast({ title: '请输入新登录密码', icon: 'none' })
        return
      }
      if (!this.editForm.re_password) {
				uni.showToast({ title: '请输入确认密码', icon: 'none' })
        return
      }
      setPayPassword({
        ...this.editForm,
        id: this.user_info.id
      }).then(res => {
        uni.showModal({
          title: '提示',
          content: '修改成功',
          showCancel: false,
          success: () => {
            uni.switchTab({ url: '/pages/user/index' })
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.password{
  padding: 40rpx;
  .submitbtn{
    color: @default;
    background: @warning;
  }
}
</style>
