export function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export function debounce (delay, callback) {
  let lastTime

  return function () {
    clearTimeout(lastTime)

    const [that, args] = [this, arguments]

    lastTime = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}

export function observerDomResize (dom, callback) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

export function getPointDistance (pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function uuid (hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
  })
}


/**
 * @method 方法名 异步引入化高德地图
 * @param {String} version 高德的key值
 * @param {String} key 高德的key值
 * @param {Array} amapPlugins 需要全局加载的地图插件
 * @description 采用异步的形式加入
 */
 export function AMapLoader (version = '1.4.15', key = '933b305475c2d0a02c02b0f393112744', amapPlugins = []) {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
      console.log('AMap已经存在')
    } else {
      let plugins = '&plugin='
      amapPlugins.map((item) => {
        plugins += item + ','
      })
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://webapi.amap.com/maps?v=' + version + '&callback=initAMap&key=' + key + plugins
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      console.log('高德地图初始化成功')
      resolve(window.AMap)
    }
  })
}

