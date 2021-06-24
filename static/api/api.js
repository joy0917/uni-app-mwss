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

// 投资项目-立即投资
export const investOrder = data => {
	return request({
		url: '/api/frontend/invest_order/invest',
		data,
		method: 'POST'
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

// 积分商城-订单详情
export const orderDetail = id => {
	return request({
		url: `/api/frontend/mall/order/detail/${id}`,
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

// 用户签到送现金
export const signin = data => {
	return request({
		url: '/api/frontend/user/signin',
		data,
		method: 'POST'
	})
}

// 我邀请好友列表
export const myInvites = data => {
	return request({
		url: '/api/frontend/user/my/invites',
		data,
		method: 'GET'
	})
}

// 实名认证
export const realname = data => {
	return request({
		url: '/api/frontend/user/check/realname',
		data,
		method: 'POST'
	})
}

// 查询用户详情
export const updateUserInfo = id => {
	return request({
		url: `/api/frontend/user/detail/${id}`,
		method: 'GET'
	})
}

// 修改登录密码
export const setPassword = data => {
	return request({
		url: '/api/frontend/user/reset/password/set',
		data,
		method: 'POST'
	})
}

// 修改支付密码
export const setPayPassword = data => {
	return request({
		url: '/api/frontend/user/reset/pay/password',
		data,
		method: 'POST'
	})
}

// 绑定银行卡
export const bindBankcard = data => {
	return request({
		url: '/api/frontend/user/bind/bankcard',
		data,
		method: 'POST'
	})
}

// 解绑银行卡
export const delBankcard = data => {
	return request({
		url: '/api/frontend/user/del/card',
		data,
		method: 'POST'
	})
}

// 银行卡列表
export const bankcardList = id => {
	return request({
		url: `/api/frontend/user/card/list/${id}`,
		method: 'GET'
	})
}

// 站内信列表
export const noticeList = data => {
	return request({
		url: '/api/frontend/notice/list',
    data,
		method: 'GET'
	})
}

// 查看消息
export const noticeDetail = id => {
	return request({
		url: `/api/frontend/notice/detail/${id}`,
		method: 'GET'
	})
}
