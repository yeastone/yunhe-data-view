<template>
    <div class="yh-rank-table-4" :ref="ref">
        <div class="table-item" v-for="(item,index) in data" :key="item.name">
            <div class="index">{{index + 1}}</div>
            <div class="item-wrap" @click="itemClick(item,index)">
                <div class="item-name" :title="item.name">{{item.name}}</div>
                <div class="item-progress-bg">
                    <div class="item-progress-wrap" :style="{width: item.width}">
                        <div class="item-progress width0-to-100" ></div>
                    </div>
                </div>
                <div class="item-value">{{item.value + unit}}</div>
            </div>
        </div>
        <div class="empty" v-if="data.length === 0">暂无数据</div>
    </div>
</template>
<script>
export default {
  name: 'YhRankTable4',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    },
    max: Number
  },
  data () {
    return {
      ref: 'yh-rank-table-4',
      data: []
    }
  },
  watch: {
    tableData () {
      this.formatTableData()
    }
  },
  created () {
    this.formatTableData()
  },
  methods: {
    formatTableData () {
      if (this.tableData.length) {
        const list = [...this.tableData]
        list.sort((a, b) => b.value - a.value)
        const max = this.max ? this.max : list[0].value
        list.map(item => {
          item.width = (item.value / max * 100).toFixed(2) + '%'
        })
        this.data = [...list]
      }
    },
    itemClick (item, index) {
      console.log(item, index)
      this.$emit('rowClick', item, index)
    }
  }
}
</script>