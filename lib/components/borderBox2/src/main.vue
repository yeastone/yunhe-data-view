<template>
    <div class="yh-border-box-2" :ref="ref">
        <svg  class="yh-border-svg-container" :width="width" :height="height" >
            <defs>
                <polygon id="yh-border-box-2-path" :points="`13.5 0 ${width - 15} 0 ${width} 16.5 ${width} ${height - 13.5} ${width - 13.5} ${height} 13.5 ${height} 0 ${height - 13.5} 0 13.5`"></polygon>
                <filter x="-2.6%" y="-3.9%" width="105.1%" height="107.7%" filterUnits="objectBoundingBox" id="yh-border-box-2-filter">
                    <feMorphology radius="5" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                    <feGaussianBlur stdDeviation="9" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.4   0 0 0 0 0.72 0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                </filter>
            </defs>
            <g id="yh-border-box-2-decoration" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="rect" opacity="1">
                    <use :fill="backgroundColor" fill-rule="evenodd" xlink:href="#yh-border-box-2-path"></use>
                    <use fill="black" fill-opacity="1" filter="url(#yh-border-box-2-filter)" xlink:href="#yh-border-box-2-path"></use>
                    <path stroke="#108FFF" stroke-width="1" :d="`M${width - 15},0.5 L${width - 0.5},16.5 L${width - 0.5},${height - 14} L${width - 14},${height - 0.5} L13.5,${height - 0.5} L0.5,${height - 14} L0.5,14 L14,0.5 L${width - 15},0.5 Z`" stroke-linejoin="square"></path>
                </g>
                <polygon id="矩形" fill="#00DEFE" :points="`0 ${height - 10} 10 ${height} 0 ${height}`"></polygon>
                <polygon id="矩形" fill="#00DEFE" :points="`${width -  10} 0 ${width} 0 ${width} 10`"></polygon>
                <polygon id="路径" fill="#42DBF2" fill-rule="nonzero" :points="`${width} ${height-30} ${width} ${height- 13.5} ${width -13.5} ${height} ${width -72 } ${height} ${width - 72} ${height - 3} ${width -15} ${height -3} ${width-3} ${height -15} ${width -3} ${height-30}`"></polygon>
                <polygon id="路径" fill="#42DBF2" fill-rule="nonzero" transform="translate(36.000000, 15.000000) scale(-1, -1) translate(-36.000000, -15.000000) " points="72 0 72 16.5 58.5 30 0 30 0 27 57 27 69 15 69 0"></polygon>
            </g>
        </svg>
        <div class="border-box-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import autoResize from '../../..mixin/autoResize'
export default {
  name: 'YhBorderBox2',
  mixins: [autoResize],
  props: {
    backgroundColor: {
      type: String,
      default: 'rgba(5,17,64,0.7)'
    }
  },
  data () {
    return {
      ref: 'yh-border-box-2'
    }
  }
}
</script>