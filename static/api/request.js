import { apiUrl } from '@/static/api/config'
import store from '@/store'

export default ({url, data, method, loading}) => {
	return new Promise((resolve, reject) => {
    if (loading) {
      uni.showLoading({ title: '加载中', mask: true })
    }
		uni.request({
			url: apiUrl + url,
			data,
			method,
			header: {
        Authorization: 'Bearer' + ' ' + (store.state.user.user_info.token || '')
      }
		}).then(response => {
      if (loading) {
        uni.hideLoading()
      }
			let res = response[1] && response[1].data
			if (res.msg_code === 100000) {
				resolve(res)
			} else {
				uni.showToast({
					title: res.message || '请求失败',
					icon: 'none'
				})
			}
		}).catch(err => {
      if (loading) {
        uni.hideLoading()
      }
			uni.showToast({
				title: '请求报错',
				icon: 'none'
			})
			reject(err)
		})
	})
}
