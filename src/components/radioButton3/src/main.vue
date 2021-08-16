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
<style lang="less">
.yh-radio-button-3{
    .radio-item {
      cursor: pointer;
      display: inline-block;
    //   width: 206px;
      height: 42px;
      line-height: 42px;
      font-size: 20px;
      color: #B8C8EE;
      margin-left: -20px;
      // transform: scaleY();
      span {
        line-height: 42px;
      font-size: 20px;
      color: #B8C8EE;
      }
      &:nth-child(even){
        transform: scaleY(-1);
        span {
          display: inline-block;
          transform: scaleY(-1);
        }
      }
    }
    .active {
      color: #fff;
      font-weight: bold;
      background: transparent url('../assets/tab_active.png') no-repeat;
    }
}
</style>
