import store from '@/store'
import { signin, updateUserInfo } from '@/static/api/api'
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
  校验实名认证
 */
export const checkRealAuth = () => {
  if (store.state.user.user_info.id_code) {
    return true
  }
  uni.showModal({
    title: '提示',
    content: '请先实名认证',
    showCancel: false,
    success: () => {
      uni.navigateTo({
        url: '/pages/user/auth'
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

/*
  更新用户信息
 */
export const updateUser = () => {
  updateUserInfo(store.state.user.user_info.id).then(res => {
    let user_info = {
      ...res.response,
      token: store.state.user.user_info.token
    }
    store.commit('setUserInfo', user_info)
  })
}
