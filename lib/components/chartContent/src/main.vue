<template>
  <div :ref="ref" class="yh-chart-content" :id="chartId"></div>
</template>
<script>
import Graph from './chart.js'
import { uuid } from '../../../util/index.js'
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
      el: null
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
      this.graph = new Graph(this.el)
      this.graph.setData(this.chartOptions)
      this.el.addEventListener('resize', this.graph.resize)
    }
  },
  beforeDestroy () {
    this.el.removeEventListener('resize', this.graph.resize)
    this.graph.destroy()
    this.graph = null
    this.form = {
        uscc: '',
        name: '',
        register_num: '',
        establish_time: '',
        register_capital: '',
        scale: '',
        manage_status: '',
        register_authority: '',
        business_scope: '',
        address: '',
        industry_code: '',
        type_code: '',
        status: 0,
        owner_name: ''
      }
  }
}
</script>