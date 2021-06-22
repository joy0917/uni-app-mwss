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

// 投资项目列表
export const investProject = data => {
	return request({
		url: '/api/frontend/invest_project',
		data,
		method: 'GET'
	})
}

// 投资项目详情
export const investProjectDetail = id => {
	return request({
		url: `/api/frontend/invest_project/${id}`,
		method: 'GET'
	})
}

// 积分商城-商品列表
export const productList = data => {
	return request({
		url: '/api/frontend/mall/product/list',
		data,
		method: 'GET'
	})
}

// 积分商城-商品详情
export const productDetail = id => {
	return request({
		url: `/api/frontend/mall/product/detail/${id}`,
		method: 'GET'
	})
}

// 积分商城-立即兑换
export const orderAdd = data => {
	return request({
		url: '/api/frontend/mall/order/add',
		data,
		method: 'POST'
	})
}

// 积分商城-订单列表
export const orderList = data => {
	return request({
		url: '/api/frontend/mall/order/list',
		data,
		method: 'GET'
	})
}

// 关于我们子页面
export const aboutDetail = data => {
	return request({
		url: '/api/frontend/about/detail',
		data,
		method: 'GET'
	})
}

// 登录
export const login = data => {
	return request({
		url: '/api/frontend/user/account/login',
		data,
		method: 'POST'
	})
}

// 注册
export const register = data => {
	return request({
		url: '/api/frontend/user/phone/register',
		data,
		method: 'POST'
	})
}

// 发送验证码
export const sendSms = data => {
	return request({
		url: '/api/frontend/sms',
		data,
		method: 'POST'
	})
}
