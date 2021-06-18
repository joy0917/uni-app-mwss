import request from './request'

// 轮播列表
export const carouselList = data => {
	return request({
		url: '/api/frontend/carousel/list',
		data,
		method: 'GET'
	})
}