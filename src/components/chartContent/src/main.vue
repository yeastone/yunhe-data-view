<template>
  <div :ref="ref" class="yh-chart-content" :id="chartId"></div>
</template>
<script>
import Graph from './chart.js'
import { uuid, domResizeObserver } from '../../../util/index.js'
export default {
  name: 'YhChartContent',
  props: {
    chartOptions: Object
  },
  watch: {
    chartOptions: {
      handler (newV) {
       newV && this.graph.setData(this.chartOptions)
      },
      deep: true
    }
  },
  data () {
    const id = uuid()
    return {
      graph: '',
      ref: 'yh-chart-content',
      chartId: `yh-chart-content-${id}`,
      el: null,
      observer: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    destroy () {
      this.graph.destroy()
      this.graph = null
    },
    init () {
      this.el = document.getElementById(this.chartId)
      this.observer = domResizeObserver(this.el,() => { this.graph.resize() })
      this.graph = new Graph(this.el)
      this.graph.setData(this.chartOptions)
    }
  },
  beforeDestroy () {
    this.observer.disconnect()
    this.observer = {}
    this.graph.destroy()
    this.graph = null
  }
}
</script>
<style lang="less">
.yh-chart-content{
  height: 100%;
  width: 100%;
}
</style>
