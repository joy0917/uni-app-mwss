export default {
  state: {
    user_info: uni.getStorageSync('user_info') || {},
    user_channel_code: uni.getStorageSync('user_channel_code')
  },
  mutations: {
    setUserInfo (state, info) {
      uni.setStorageSync('user_info', info)
      state.user_info = info
    },
    setUserChannelCode (state, info) {
      uni.setStorageSync('user_channel_code', info)
      state.user_channel_code = info
    }
  },
  actions: {
  }
}
