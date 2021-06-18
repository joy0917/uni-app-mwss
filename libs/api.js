import request from './request'

// 登录
export const login = data => {
	return request({
		url: '/channel/departments',
		data,
		method: 'GET'
	})
}