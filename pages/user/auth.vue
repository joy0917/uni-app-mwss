
<!-- 实名认证 -->
<template>
	<view class="auth">
		<uni-forms ref="form" :modelValue="editForm" :rules="rules" label-width="80">
			<uni-forms-item label="姓名" required name="real_name">
				<uni-easyinput :clearable="!user_info.real_name" trim :inputBorder="false" v-model="editForm.real_name" placeholder="请输入" :disabled="!!user_info.real_name"/>
			</uni-forms-item>
			<uni-forms-item label="身份证号码" required name="id_code">
				<uni-easyinput :clearable="!user_info.real_name" trim :inputBorder="false" v-model="editForm.id_code" placeholder="请输入" :disabled="!!user_info.real_name"/>
			</uni-forms-item>
      <button type="primary" class="submitbtn" @click="submitForm" v-if="!user_info.real_name">立即认证</button>
		</uni-forms>
	</view>
</template>

<script>
import { realname } from '@/static/api/api'
import { updateUser } from '@/static/libs/common'
export default {
  data () {
    return {
      editForm: {
        id: null,
        real_name: null,
        id_code: null
      },
      rules: {
        real_name: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        id_code: {
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
        realname(this.editForm).then(res => {
          updateUser()
          uni.showModal({
            title: '提示',
            content: '认证成功',
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
  },
  mounted () {
    this.editForm = {
      id: this.user_info.id,
      real_name: this.user_info.real_name,
      id_code: this.user_info.id_code
    }
  }
}
</script>

<style lang="less" scoped>
.auth{
  padding: 40rpx;
  .submitbtn{
    background: linear-gradient(180deg, #E7D294 0%, #CBA65B 100%);
  }
}
</style>
