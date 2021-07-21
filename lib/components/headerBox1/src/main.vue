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