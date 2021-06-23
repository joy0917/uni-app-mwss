import store from '@/store'
import { signin } from '@/static/api/api'
/*
  校验登录
 */
export const checkLogin = () => {
  if (store.state.user.user_info.token) {
    return true
  }
  uni.showModal({
    title: '提示',
    content: '请先登录',
    showCancel: false,
    success: () => {
      uni.navigateTo({
        url: '/pages/user/login'
      })
    }
  })
  return false
}

/*
  签到
 */
export const userSignin = () => {
  signin({id: store.state.user.user_info.id}).then(res => {
    uni.showModal({
      content: '签到成功',
      showCancel: false
    })
  })
}
