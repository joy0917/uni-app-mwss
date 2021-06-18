/**
 * @description 环境标识
 * @arguments development production
 */
let env = process.env.NODE_ENV 

/**
 * @description API的基础路径
 */
export const baseUrl = env === 'development' ? 'http://test.crs.edaili.com' : '//crs.edaili.com'
