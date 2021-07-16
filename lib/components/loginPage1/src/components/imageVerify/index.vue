<template>
  <div @click="init" class="img-verify-box">
    <img class="verify-img" :src="imageSrc" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      pid: '',
      imageSrc: '',
      getImageSrc: false // status
    }
  },
  methods: {
    // init image
    init () {
      if (this.getImageSrc) return false
      this.pid = ''
      this.getImageSrc = true
      this.$emit('loadImgSrc')
    },
    setData (data) {
      this.imageSrc = data.image || ''
      this.pid = data.pid || ''
      this.$emit('pid-change', data.pid)
      this.getImageSrc = false
    }
  },

  created () {
    this.init()
  }
}
</script>