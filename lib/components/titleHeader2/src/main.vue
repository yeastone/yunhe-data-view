<template>
  <div class="yh-title-header-2" :ref="ref">
    <svg  class="yh-title-header-svg-container" :width="width" :height="height" >
      <defs>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50.0806435%" id="linearGradient-1">
            <stop stop-color="#3557DE" stop-opacity="0.0157876902" offset="0%"></stop>
            <stop stop-color="#00DEFE" stop-opacity="0.503824301" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-1.11022302e-14%" y1="50%" x2="100%" y2="50%" id="linearGradient-2">
            <stop stop-color="#00F1FF" stop-opacity="0.302939248" offset="0%"></stop>
            <stop stop-color="#0485EC" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-3">
            <stop stop-color="#02E5FD" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#1DFFF8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-4">
            <stop stop-color="#02E5FD" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#1DFFF8" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1国庆人口流动趋势-切图" transform="translate(-554.000000, -349.000000)">
            <g id="标题背景" transform="translate(555.000000, 350.000000)">
                <path d="M8.59150999,2.5 L16.1702945,7.05859375 L411,7.05859375 L411,41.0574918 L16.4789555,40.1889638 L8.91655786,44.7475586 L3,44.7475586 L3,2.5 L8.59150999,2.5 Z" id="矩形" stroke="url(#linearGradient-2)" fill="url(#linearGradient-1)" opacity="0.696079799"></path>
                <polyline id="路径-6" stroke="url(#linearGradient-3)" points="2.27248775e-13 5.19238281 2.27248775e-13 0 9.88378906 0 17.4625736 4.55859375 25 4.55859375"></polyline>
                <polyline id="路径-6" stroke="url(#linearGradient-3)" transform="translate(12.500000, 44.596191) scale(1, -1) translate(-12.500000, -44.596191) " points="2.27248775e-13 47.1923828 2.27248775e-13 42 9.88378906 42 17.4625736 46.5585937 25 46.5585937"></polyline>
                <polyline id="路径-6" stroke="url(#linearGradient-4)" transform="translate(108.045410, 42.096191) scale(1, -1) translate(-108.045410, -42.096191) " points="3 44.6923828 3 39.5 8.88378906 39.5 16.4625736 44.0585937 213.09082 44.0585937"></polyline>
                <polyline id="路径-6" stroke="url(#linearGradient-4)" points="3 7.69238281 3 2.5 8.88378906 2.5 16.4625736 7.05859375 213.09082 7.05859375"></polyline>
            </g>
        </g>
    </g>
    </svg>
    <span class="title-text">{{ title }}</span>
    <slot></slot>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'

export default {
  name: 'YhTitleHeader2',
  mixins: [autoResize],
  props: {
    title: String
  },
  data () {
    return {
      ref: 'yh-title-header-2'
    }
  }
}
</script>