<template>
     <div class="yh-border-box-3" :ref="ref">
        <svg  class="yh-border-svg-container" :width="width" :height="height" >
           <defs>
        <polygon id="path-1" :points="`${width - 9} 0 ${width - 9} ${height - 7 } 15 ${height - 7 } 1 ${height - 21} 1 0`"></polygon>
        <filter x="-2.6%" y="-4.3%" width="105.1%" height="108.5%" filterUnits="objectBoundingBox" id="filter-2">
            <feMorphology radius="5" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
            <feGaussianBlur stdDeviation="9" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.413203415   0 0 0 0 0.476817255  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <filter x="-1.4%" y="-1.1%" width="102.5%" height="102.6%" filterUnits="objectBoundingBox" id="filter-3">
            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
        </filter>
    </defs>
    <g id="背景" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="编组">
            <g id="路径" opacity="0.79608">
                <use fill="#002835" fill-rule="evenodd" xlink:href="#path-1"></use>
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <path stroke="#155974" stroke-width="1" :d="`M${width - 9.5},0.5 L${width - 9.5},${height - 7.5} L15.5,${height - 7.5} L1.5,${height - 21.5}L1.5,0.5 L${width - 9.5},0.5 Z`" stroke-linejoin="square"></path>
            </g>
            <polyline id="路径" stroke="#40A1B6" stroke-width="2" filter="url(#filter-3)" :points="`${width - 176.5} ${height - 7} 15 ${height - 7} 1 ${height - 21.5} 1 0`"></polyline>
            <path :d="`M${width - 2},0 C${width - 1},0 ${width},1 ${width},2 C${width},3 ${width - 1},4 ${width - 1.5},4 L${width - 1.5},${height} L0,${height} L0,${height - 16} L15,${height - 1} L${width - 2.5},${height - 1} L${width - 2.5},4 C${width - 3.5},4 ${width - 4},3 ${width - 4},2 L${width - 4},2 C${width - 4},1 ${width - 3},0 ${width - 2},0 Z`" id="形状结合" fill="#40A1B6"></path>
        </g>
    </g>
        </svg>
        <div class="border-box-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid } from '../../../util/index'
export default {
  name: 'YhBorderBox3',
  mixins: [autoResize],
  data () {
    const id = uuid()
    return {
      ref: 'yh-border-box-3',
      pathId: `yh-border-box-3-path-${id}`,
      filterId: `yh-border-box-3-filter-${id}`
    }
  }
}
</script>
<style lang="less">
.yh-border-box-3 {
    position: relative;
    width: 100%;
    height: 100%;
    .yh-border-svg-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }
    .border-box-content {
        position: relative;
        width: 100%;
        height: 100%;
    }
}

</style>
