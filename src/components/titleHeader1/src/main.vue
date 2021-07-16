<template>
  <div class="yh-title-header-1" :ref="ref"> 
    <span class="title-line"></span>
    <span class="title-text">{{ title }}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YhTitleHeader1',
  props: {
    title: String
  },
  data() {
      return {
          ref:'title-header-1'
      }
  },
}
</script>
<style lang="less" >
.yh-title-header-1 {
  height: 32px;
  text-align: left;
  vertical-align: baseline;
  .title-line {
    display: inline-block;
    width: 4px;
    height: 20px;
    margin: 5px 0;
    background-color: #48e8ff;
  }
  .title-text {
    // font-family: SourceHanSansSC-Regular;
    vertical-align: top;
    margin-left: 7px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 32px;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
</style>
