/*
  获取格式化时间
*/
export const getFormatDate = (format = 'YYYY-MM-DD hh:mm:ss', date = new Date()) => {
  let Y = date.getFullYear()
  let M = date.getMonth() + 1
  let D = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  if (M >= 1 && M <= 9) M = '0' + M
  if (D >= 0 && D <= 9) D = '0' + D
  if (h >= 0 && h <= 9) h = '0' + h
  if (m >= 0 && m <= 9) m = '0' + m
  if (s >= 0 && s <= 9) s = '0' + s
  return format.replace('YYYY', Y).replace('MM', M).replace('DD', D).replace('hh', h).replace('mm', m).replace('ss', s)
}

/*
  千分位数字
*/
export const getThousand = num => {
  if (num === null || num === undefined) return '-'
  let data = num + ''
  return data.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,')
}
