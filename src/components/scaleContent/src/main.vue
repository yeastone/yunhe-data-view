<template>
  <div
    class="yh-scale-content"
    :ref="ref"
    :class="{ 'scale-on': zoom }"
    :style="{
      width: zoom ? width : '100%',
      height: zoom ? scaleHeight + 'px' : '100%',
      transform: zoom ? `scale(${scale}) translate(-50%, -50%)` : ''
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
import { debounce } from "../../..util/index.js";
export default {
  name: "YhScaleContent",
  props: {
    scaleWidth: {
      type: Number,
      default: 1920
    },
    scaleHeight: {
      type: Number,
      default: 1080
    },
    zoom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    this.loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    return {
      ref: "yh-scale-content",
      scale: 1,
      // 控制缩放变量
      height: "100%",
      width: "100%"
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.zoom && this.getScale();
    });
    this.zoom && this.getScale();
  },
  methods: {
    getScale: debounce(500, function() {
      if (this.scaleHeight) {
        this.scale = window.innerHeight / this.scaleHeight;
        this.width = window.innerWidth / this.scale + "px";
      }
    })
  }
};
</script>
<style lang="less">
.yh-scale-content {
}
.scale-on {
  position: absolute;
  transform-origin: 0 0;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
</style>
