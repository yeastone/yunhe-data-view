<template>
    <div class="yh-rank-table-1" :ref="ref">
        <div class="table-item" v-for="(item,index) in data" :key="item.name">
            <div class="index">{{index + 1}}</div>
            <div class="item-wrap" @click="itemClick(item,index)">
                <div class="item-info">
                    <div class="item-name">{{item.name}}</div>
                    <div class="item-count">{{item.value + unit}}</div>
                </div>
                <div class="item-progress-bg">
                    <div class="item-progress-wrap" :style="{width: item.width}">
                        <div class="item-progress width0-to-100" ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="empty" v-if="data.length === 0">暂无数据</div>
    </div>
</template>
<script>
export default {
  name: 'YhRankTable1',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ref: 'yh-rank-table-1',
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
        const max = list[0].value
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
<style lang="less">

@keyframes width0to100 {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }

}
.width0-to-100{
    animation-name: width0to100;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

.yh-rank-table-1 {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
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
    .empty  {
        position: absolute;
        color: #909399;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .table-item {
        height: 52px;
        text-align: left;
        .index {
            display: inline-block;
            width: 32px;
            text-decoration:underline;
            // border-bottom: 1px solid #00defe;
            // padding-bottom: 5px;
            height: 52px;
            line-height: 52px;
            font-size: 14px;
            color: #00defe;
            margin-left: 10px;
        }
        .item-wrap {
            display: inline-block;
            vertical-align: top;
            width: calc(100% - 52px);
            .item-info {
                height: 20px;
                text-align: left;
                .item-name {
                    display: inline-block;
                    color:  #00DEFE;
                    font-size: 14px;
                    line-height: 20px;
                }
                .item-count {
                    color: #B8C8EE;
                    font-size: 16px;
                    line-height: 20px;
                    float: right;
                }
            }
        }
        .item-progress-bg {
            height: 8px;
            margin: 8px 0 16px 0;
            background: rgba(2,48,97,0.50);
            border-radius: 4px;
            position: relative;
            .item-progress-wrap {
                position: absolute;
                left: 0;
                top: 0;
                height: 8px;
                .item-progress {
                  border-radius: 4px;
                  height: 8px;
                  background-image: linear-gradient(270deg, #2DE2D4 0%, #6092D3 100%);
                  box-shadow: 0 0 4px 0 rgba(0,0,0,0.50);
                }
            }
        }
    }
}

</style>
