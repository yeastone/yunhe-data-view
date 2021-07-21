<template>
    <div class="yh-radio-button-1" :ref="ref">
        <div class="item" v-for="(item,index) in options"
            @click="itemClick(item,index)"
            :key="item.label" :class="{'item-active':index === activeIndex}">{{item.label}}</div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton1',
  props: {
    activeIndex: Number,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ref: 'yh-radio-button-1'
    }
  },
  methods: {
    itemClick (item, index) {
      this.$emit('itemClick', item, index)
    }
  }
}
</script>