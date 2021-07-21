<template>
  <div class="yh-border-box-1" :ref="ref"  :style="{
    background: background
  }">
    <div
      class="common-corner"
      v-for="i in 4"
      :key="i"
      :class="'common-corner-' + i"
      :style="{
        'border-color': cornerColor,
        'border-width': borderWidth,
        width: cornerWidth,
        height: cornerHeight
      }"
    ></div>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'

export default {
  name: 'YhBorderBox1',
  mixins: [autoResize],
  props: {
    background: {
      type: String,
      default: 'transparent'
    },
    cornerColor: {
      type: String,
      default: '#00DEFE'
    },
    borderWidth: {
      type: String,
      default: '2px'
    },
    cornerWidth: {
      type: String,
      default: '16px'
    },
    cornerHeight: {
      type: String,
      default: '16px'
    },
    offset: {
      type: String,
      default: '0px'
    }
  },
  data () {
    return {
      ref: 'yh-border-box-1'
    }
  },
  methods: {
  },
  mounted () {
    this.$refs[this.ref].style.setProperty('--offset', this.offset)
  }
}
</script>

<style lang="less">
.yh-border-box-1 {
  --offset: -1px;
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #108fff!important;
  box-shadow: inset 0 0 18px 5px #0064b8!important;
  .common-corner {
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid #00dcfeaf;
  }
  .common-corner-1 {
    left: var(--offset);
    top: var(--offset);
    border-right: none;
    border-bottom: none;
  }
  .common-corner-2 {
    right: var(--offset);
    top: var(--offset);
    border-left: none;
    border-bottom: none;
  }
  .common-corner-3 {
    left: var(--offset);
    bottom: var(--offset);
    border-right: none;
    border-top: none;
  }
  .common-corner-4 {
    right: var(--offset);
    bottom: var(--offset);
    border-left: none;
    border-top: none;
  }
  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
