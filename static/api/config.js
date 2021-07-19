/**
 * @description 环境标识
 * @arguments development production
 */
let env = process.env.NODE_ENV 

/**
 * @description API的基础路径
 */
export const apiUrl = env === 'development'
	? 'http://47.117.131.251:8021'
	: 'http://47.117.131.251:8021'

/**
 * @description 图片视频链接的基础路径
 */
 export const hostsUrl = env === 'development'
 ? 'http://47.117.131.251:8021/public/'
 : 'http://47.117.131.251:8021/public/'

/**
 * @description 安卓渠道编码参数, ios通过链接参数?channelCode=TEST_123设置
 */
 export const channelCode = 'TEST_123'
