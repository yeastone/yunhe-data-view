<template>
    <div class="yh-radio-button-4" :ref="ref">
        <div class="radio-item"  v-for="(item,index) in radioConfig" @click="radioItemClick(item,index)" :key="item.key" :class="{'active':item.key === activeKey }"> <span >{{item.label}}</span></div>
    </div>
</template>
<script>
export default {
  name: 'YhRadioButton4',
  props: {
    radioConfig: Array,
    activeKey: String
  },
  data () {
    return {
      ref: 'yh-radio-button-4'
    }
  },
  methods: {
    radioItemClick (item, index) {
      this.$emit('radioItemClick', item, index)
    }
  }
}
</script>