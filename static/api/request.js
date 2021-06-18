import { baseUrl } from './config'

export default ({url, data, method}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {}
		}).then(response => {
			let res = response[1].data
			if (res.msg_code === 100000) {
				resolve(res)
			} else {
				uni.showToast({
					title: res.message || '请求失败',
					icon: 'none'
				})
			}
		}).catch(err => {
			uni.showToast({
				title: '请求报错',
				icon: 'none'
			})
			reject(err)
		})
	})
}
