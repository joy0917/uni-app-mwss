/**
 * Get a random number between [min, max)
 * @param {number} min minimun value
 * @param {number} max maximun value
 */
const randomArbitrary = (min, max) =>
  (Math.random() * (max - min)) + min

/**
 * Get a random integer between  [min, max]
 * @param {number} min minimun value
 * @param {number} max maximun value
 */
const randomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Get a random color value between [min, max]
 * @param {number} min minimun value
 * @param {number} max maximun value
*/
const randomColor = (min, max) => {
  const r = randomInt(min, max)
  const g = randomInt(min, max)
  const b = randomInt(min, max)
  return `rgb(${r}, ${g}, ${b})`
}

/**
 * Test whether a number is positive integer
 * @param {number} num number to be tested
 */
const isPositiveInt = (num) => {
  const validInt = new RegExp(/^[1-9]\d*$/g)
  return validInt.test(num)
}

/**
 * Generation verification code
 * @param {number} width width of code background
 * @param {number} height height of code background
 * @param {string} type type of verification code, can be'default' (mix of number and letter), 'number', 'letter'
 * @param {number} codeLen number of characters in code, default is 4
 */
const generateCode = (
  width,
  height,
  type = 'default',
  codeLen = 4
) => {
  if (!width || !height) {
    throw new Error('params width and/or height is needed.')
  }
  if (typeof width !== 'number') {
    throw new Error('type of param "width" should be number.')
  }
  if (typeof height !== 'number') {
    throw new Error('type of param "height" should be number.')
  }
  if (type) {
    if (typeof type === 'string') {
      const typeList = ['default', 'number', 'letter']
      if (typeList.indexOf(type) === -1) {
        throw new Error('param type should be "default", "number", or "letter"')
      }
    } else if (typeof type === 'number') {
      if (!isPositiveInt(type)) {
        throw new Error('param codeLen shoule be positive integer.')
      }
      codeLen = type
      type = 'default'
    } else {
      throw new Error('please check the type of your third param, or checkout the API reference for more info. https://github.com/levblanc/canvas-verification-code')
    }
  }
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const numberArr = '0123456789'.split('')
  const letterArr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let codeText = ''
  let targetArr = []
  if (type === 'default') {
    targetArr = numberArr.concat(letterArr)
  } else if (type === 'number') {
    targetArr = numberArr
  } else {
    targetArr = letterArr
  }
  canvas.width = width
  canvas.height = height
  ctx.fillStyle = randomColor(180, 255)
  ctx.globalAlpha = 0.7
  ctx.fillRect(0, 0, width, height)
  ctx.globalAlpha = 1
  for (let i = 0; i < codeLen; i++) {
    const textIndex = randomInt(0, targetArr.length - 1)
    const targetChar = targetArr[textIndex]
    ctx.font = 'bold 38px serif'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = randomColor(1, 100)
    const transX = (width / codeLen) * (i + 0.2)
    const transY = height / 2
    const scaleX = randomArbitrary(0.8, 1)
    const scaleY = randomArbitrary(0.8, 1)
    const deg = Math.PI / 180
    const rotate = randomArbitrary(-60, 60)
    ctx.translate(transX, transY)
    ctx.scale(scaleX, scaleY)
    ctx.rotate(deg * rotate)
    ctx.fillText(targetChar, 0, 0)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    codeText += targetChar
  }
  return {
    code: codeText.toLowerCase(),
    data: canvas.toDataURL()
  }
}
export default generateCode
