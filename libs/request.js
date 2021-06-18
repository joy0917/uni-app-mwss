import { baseUrl } from './config'

export default ({url, data, method}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'x-access-token': '828142e749a14c7b9adf5bf80e3a7eac'
			}
		}).then(response => {
			let res = response[1].data
			if (res.code === 200) {
				resolve(res)
			} else {
				uni.showToast({
					title: res.msg || '请求失败',
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
