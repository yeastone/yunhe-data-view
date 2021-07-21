<template>
    <div class="yh-radio-button-1" :ref="ref">
        <div class="item" v-for="(item,index) in options"
            @click="itemClick(item,index)"
            :key="item.label" :class="{'item-active':index === activeIndex}">{{item.label}}</div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton1',
  props: {
    activeIndex: Number,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ref: 'yh-radio-button-1'
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
.yh-radio-button-1 {
    height: 28px;
    border: 1px solid #313B5B;
    border-radius: 2px;
    text-align: left;
    .item{
        display: inline-block;
        // height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #9DACD1;
        padding: 3px 7px;
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
            width: 1px;
            background:#313B5B ;
            left: 0px;
            top:0px;
            height: 26px;
        }
    }
    .item-active {
        color: #fff;
        position: relative;
        z-index: 10;
        background-image: linear-gradient(270deg, rgba(47,69,131,0.50) 0%, rgba(47,69,131,0.50) 99%);
        &::before {
            z-index: 10;
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            width: 100%;
            height: 100%;
            border:1px solid #00DEFE;
        }

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
