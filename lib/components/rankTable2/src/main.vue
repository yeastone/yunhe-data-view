<template>
    <div class="yh-rank-table-2">
        <table border="0" class="yh-rank-table-2-content">
            <thead>
                <tr>
                    <th class="index">序号</th>
                    <th class="name" align="left" >区域名称</th>
                    <th class="rate">占比</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.name">
                    <td class="index">
                      <img  class="rank-icon" v-if="index<3" :src="rankIcons[index]" alt="">
                      <span v-else> {{index + 1}}  </span>
                    </td>
                    <td class="name" align="left"> {{item.name}}</td>
                    <td class="rate" align="right"> {{item.rate}}</td>
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
        {
          name: '绿城花园开始建立就拉萨建立设计到拉萨氪金大佬是来得及大酒店',
          rate: '12.23%'
        },
        {
          name: '星耀李1',
          rate: '9.21%'
        }, {
          name: '绿城花园2',
          rate: '12.23%'
        },
        {
          name: '星耀李3',
          rate: '9.21%'
        }, {
          name: '绿城花园4',
          rate: '12.23%'
        },
        {
          name: '星耀李5',
          rate: '9.21%'
        }, {
          name: '绿城花园6',
          rate: '12.23%'
        },
        {
          name: '星耀李7',
          rate: '9.21%'
        }, {
          name: '绿城花园8',
          rate: '12.23%'
        },
        {
          name: '星耀李9',
          rate: '9.21%'
        }
      ]
    }
  },
  data () {
    return {
      rankIcons: [
        require('./assets/rank-1.png'),
        require('./assets/rank-2.png'),
        require('./assets/rank-3.png')
      ]
    }
  }
}
</script>