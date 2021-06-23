import store from 'store'
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
