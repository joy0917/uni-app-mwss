export default {
  state: {
    user_info: uni.getStorageSync('user_info') || {}
  },
  mutations: {
    setUserInfo (state, info) {
      uni.setStorageSync('user_info', info)
      state.user_info = info
    }
  },
  actions: {
  }
}
