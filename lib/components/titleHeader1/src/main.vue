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
          ref:'yh-title-header-1'
      }
  },
}
</script>