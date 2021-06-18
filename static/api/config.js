/**
 * @description 环境标识
 * @arguments development production
 */
let env = process.env.NODE_ENV 

/**
 * @description API的基础路径
 */
export const baseUrl = env === 'development'
	? 'http://47.117.131.251:8021'
	: 'http://47.117.131.251:8021'
