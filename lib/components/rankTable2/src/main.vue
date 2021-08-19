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