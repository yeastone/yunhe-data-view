<template>
  <div
    class="yh-scale-reserve-content"
    :ref="ref"
    :style="{
      width: zoom ? width : '100%',
      height: zoom ? height : '100%',
      transform: zoom ? `scale(${scale}) translate(0, 0)` : '',
      WebkitTransform: zoom ? `scale(${scale}) translate(0, 0) ` : ''
    }"
    :class="{ 'scale-reserve-on': zoom }"
  >
    <slot></slot>
  </div>
</template>
<script>
import { debounce } from "../../..util/index.js";
export default {
  name: "YhScaleReserveContent",
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
    return {
      ref: "yh-scale-reserve-content",
      scale: 1,
      width: "100%",
      height: "100%"
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
      const height = this.scaleHeight;
      const scale = window.innerHeight / height;
      const width = window.innerWidth / scale;
      this.width = width * scale + "px";
      this.height = height * scale + "px";
      this.scale = 1 / scale;
    })
  }
};
</script>
<style lang="less">
.scale-reserve-on {
  position: absolute;
  transform-origin: 0 0;
}
</style>
