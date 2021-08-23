<template>
    <div class="yh-radio-button-6" :ref="ref">
        <div class="item" v-for="(item,index) in options"
            @click="itemClick(item,index)"
            :key="item.label" :class="{'item-active':index === activeIndex}">{{item.label}}</div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton6',
  props: {
    activeIndex: Number,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ref: 'yh-radio-button-6'
    }
  },
  methods: {
    itemClick (item, index) {
      this.$emit('itemClick', item, index)
    }
  }
}
</script>
<style lang="less">
.yh-radio-button-6 {
    height: 28px;
    text-align: center;
    .item{
        display: inline-block;
        line-height: 20px;
        font-size: 14px;
        color: #9DACD1;
        padding: 3px 20px;
        cursor: pointer;
        z-index: auto;
    }
    .item + .item {
        position: relative;
        z-index: auto;
        &::after {
            z-index: 0;
            content: '';
            position: absolute;
            width: 2px;
            // padding: -15px 0;
            background:#313B5B ;
            left: 0px;
            top:0px;
            height: 16px;
            margin-top: 5px;
        }
    }
    .item-active {
        color: #0DFFFD;
        position: relative;
        z-index: 10;
    }
    .item:first-child{
        &::before {
            border-radius: 2px 0 0 2px;
        }
    }
    .item:last-child{
        &::before {
            border-radius: 0 2px 2px 0;
        }
    }
}
</style>
