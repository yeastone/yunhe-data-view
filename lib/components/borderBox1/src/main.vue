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