import request from './request'

// 轮播列表
export const carouselList = data => {
	return request({
		url: '/api/frontend/carousel/list',
		data,
		method: 'GET'
	})
}

// 公告列表
export const articleList = data => {
	return request({
		url: '/api/frontend/article/list',
		data,
		method: 'GET'
	})
}