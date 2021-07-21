<template>
    <div class="yh-header-box-1" :ref="ref">
        <div class="header-bg" :style="{'background-image': `url(${bgImg})`}"></div>
         <span class="title" @titleClick="titleClick">{{ title }}</span>
         <div class="slot-left"><slot name="left"></slot></div>
         <div class="slot-right"><slot name="right" ></slot></div>
    </div>
</template>
<script>
export default {
  name: 'YhHeaderBox1',
  props: {
    title: String,
    bgImg: {
      type: String,
      default: require('./assets/images/title_bg.png')
    },
    logoTitle: String
  },
  data () {
    return {
      ref: 'header-box-1'
    }
  },
  methods: {
    titleClick () {
      this.$emit('titleClick')
    },
    logoClick () {
      this.$emit('logoClick')
    }
  }
}
</script>
<style lang="less">
.yh-header-box-1 {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(180deg, rgba(5,0,34,0.70) 0%, rgba(12,102,187,0.00) 70%);
    position: relative;
    z-index: 0;
    .header-bg{
        position: absolute;
        width: 100%;
        height: 100px;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background: transparent no-repeat ;
        background-size: 1653px 119px;
        background-position: center 0;
        z-index: -1;
    }
    .title {
      cursor: pointer;
      font-size: 50px;
      line-height: 90px;
      color: #00DEFE;
      letter-spacing: 0;
      font-weight: bold;
    }
    .slot-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .slot-right {
      position: absolute;
      right: 0;
      top: 0;
    }
}
</style>
