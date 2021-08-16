<template>
    <div class="yh-radio-button-3">
        <div class="radio-item"  v-for="(item,index) in radioConfig" @click="radioItemClick(item,index)" :key="item.key" :class="{'active':item.key === activeKey }"> <span >{{item.label}}</span></div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton3',
  props: {
    radioConfig: {
      type: Array,
      default: () => [
        {
          label: '全部',
          key: 'all'
        },
        {
          label: '企业',
          key: 'qiye'
        },
        {
          label: '个体',
          key: 'geti'
        }
      ]
    }
  },
  data () {
    return {

    }
  },
  methods: {
    radioItemClick (item, index) {
      this.$emit('radioItemClick', item, index)
    }
  }

}
</script>