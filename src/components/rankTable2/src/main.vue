<template>
    <div class="yh-rank-table-2">
        <table border="0" class="yh-rank-table-2-content">
            <thead>
                <tr>
                    <th class="index">序号</th>
                    <th class="name" align="left" >区域名称</th>
                    <th class="value">占比</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.name">
                    <td class="index">
                      <img  class="rank-icon" v-if="index < 3" :src="rankIcons[index]" alt="">
                      <span v-else> {{index + 1}}  </span>
                    </td>
                    <td class="name" align="left"> {{item.name}}</td>
                    <td class="value" align="right"> {{item.value + unit}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
export default {
  name: 'YhRankTable2',
  props: {
    tableData: {
      type: Array,
      default: () => [
      ]
    },
    unit:{
      type: String,
      default:''
    }
  },
  data () {
    return {
      rankIcons: [
        require('../assets/rank-1.png'),
        require('../assets/rank-2.png'),
        require('../assets/rank-3.png')
      ]
    }
  }
}
</script>
<style lang="less">
.yh-rank-table-2 {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  .yh-rank-table-2-content {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    border-spacing: 0;
    thead {
      background: rgba(15,84,98,0.52);
      th {
        line-height: 32px;
        font-size: 14px;
        color: #B8C8EE;
        letter-spacing: 0;
      }
    }
    tbody {
      .index {
        font-weight: bold;
        .rank-icon {
          display: inline-block;
          width: 20px;
          height: 17px;
          vertical-align: middle;

      }
      }
      .index, .name {
          color: #0DFFFD;
          font-size: 14px;
      }
      .value {
          font-size: 16px;
          color: #B8C8EE;
          padding-right: 20px;
      }
      tr {
        // opacity: 0.52;
        height: 36px;
        background: rgba(32,61,76,0.36);
        box-shadow: inset 0 -1px 0 0 #2A8993;
      }
    }

    .index {
      width: 60px;

    }
    .value {
      width: 100px;
    }

  }
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

}
</style>
