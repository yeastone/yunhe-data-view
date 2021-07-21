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
<style lang="less">
.yh-rank-table-3 {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
    cursor: pointer;
    width: 6px;
    height: 4px;
    }
    &::-webkit-scrollbar-thumb {
    position: relative;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 222, 254, 0.5);
    }
    &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 222, 254, 1);
    }
    &::-webkit-scrollbar-track {
    position: relative;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 222, 254, 0.2);
    }
    .table-item {
        height: 46px;
        text-align: left;
        white-space: nowrap;
        vertical-align: top;
        .index {
            text-align: center;
            display: inline-block;
            vertical-align: top;
            width: 40px;
            height:46px;
            line-height: 46px;
            font-size: 14px;
            color: #00DEFE;
        }
        .name {
            display: inline-block;
            width: calc(100% - 40px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 46px;
            font-size: 14px;
            color: #FFFFFF;
        }
    }
}

</style>
