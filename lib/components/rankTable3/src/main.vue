<template>
    <div class="yh-rank-table-3" :ref="ref">
        <div class="table-item" v-for="(item,index) in tableData" :key="item.name">
            <div class="index">{{index + 1}}</div>
            <div class="name" :title="item.name">{{item.name}}</div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'YhRankTable3',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ref: 'yh-rank-table-3'
    }
  }
}
</script>