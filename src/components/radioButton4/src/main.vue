<template>
    <div class="yh-radio-button-4" :ref="ref">
        <div class="radio-item"  v-for="(item,index) in radioConfig" @click="radioItemClick(item,index)" :key="item.key" :class="{'active':item.key === activeKey }"> <span >{{item.label}}</span></div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton4',
  props: {
    radioConfig: Array,
    activeKey: String
  },
  data () {
    return {
      ref: 'yh-radio-button-4'
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
.yh-radio-button-4 {
  width: 100%;
  height: 100%;
  white-space: nowrap;
    .radio-item {
      cursor: pointer;
      display: inline-block;
      width: 236px;
      height: 42px;
      line-height: 42px;
      font-size: 20px;
      color: #B8C8EE;
      background: transparent url('../assets/tab.png') no-repeat;
      span {
        line-height: 42px;
      font-size: 20px;
      color: #B8C8EE;
      }
      &:nth-child(even){
        margin-left: -22px;
        transform: scale(-1,-1);
        span {
          display: inline-block;
          transform: scale(-1,-1);
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
