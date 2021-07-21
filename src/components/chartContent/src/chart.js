import * as echarts from 'echarts'
export default function Graph ($el) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init($el)

  const autoPlayId = null
  const aniCtlId = null
  // 绘制图表
  return {
    setData: function (options) {
      myChart.clear()
      myChart.setOption(options)
    },
    destroy: function () {
      if (aniCtlId) window.cancelAnimationFrame(aniCtlId)
      if (autoPlayId) clearInterval(autoPlayId)
    },
    resize: myChart.resize
  }
}
