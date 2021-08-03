/**
 * @description 环境标识
 * @arguments development production
 */
let env = process.env.NODE_ENV 
/**
 * @description API的基础路径
 */
export const apiUrl = env === 'development'
	? 'http://139.196.159.228:8021'
	: 'http://139.196.159.228:8021'

/**
 * @description 图片视频链接的基础路径
 */
export const hostsUrl = env === 'development'
  ? 'http://139.196.159.228:8021/public/'
  : 'http://139.196.159.228:8021/public/'

/**
 * @description 安卓渠道编码参数
 * ios通过链接参数?channelCode=TEST_123设置
 */
export const channelCode = 'TEST_123'

 /**
  * @description 在线客服路径
  * 如果管理端客服链接仅配置域名，如：127.0.0.1，剩余路径请配置在里。
  * 如果管理端客服链接配置全路径，如：127.0.0.1/index/index/home，该参数请为空
  */
export const servicePath = '/index/index/home'
