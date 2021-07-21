<template>
    <div class="yh-progress-bar-1" :ref="ref">
        <canvas ref="progressbar1" :width="width" :height="height"> </canvas>
    </div>
</template>
<script>
export default {
  name: 'YhProgressBar1',
  props: {
    width: {
      type: Number,
      default: 390
    },
    height: {
      type: Number,
      default: 16
    },
    colorLeft:{
        type:String,
        default: '#2E8BFF'
    },
    colorRight:{
        type:String,
        default: '#2DE2D4'
    },
    leftRate: {
      type: Number,
      default: 0.55
    },
    rightRate: {
      type: Number,
      default: 0.45
    }
  },
  data () {
    return {
    ref: 'yh-progress-bar-1',
      leftNow: 0,
      leftTarget: 0,
      rightNow: 0,
      rightTarget: 0,
      leftStep: 0,
      rightStep: 0,
      count: 50,
      timer: null,
      can: null,
      ctx: null
    }
  },
  watch: {
    leftRate () {
      this.cal()
    },
    rightRate () {
      this.cal()
    }
  },
  mounted () {
    this.cal()
  },
  methods: {
    cal () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.leftTarget = this.leftRate * (this.width - this.height / 2) + this.height / 2
      this.rightTarget = this.rightRate * (this.width - this.height / 2) + this.height / 2
      this.leftStep = (this.leftTarget - this.leftNow) / 50
      this.rightStep = (this.rightTarget - this.rightNow) / 50
      this.can =this.$refs.progressbar1
      if (this.can.getContext) {
        this.ctx = this.can.getContext('2d')
        this.count = 50
        this.draw()
      }
    },
    draw () {
      this.ctx.clearRect(0, 0, this.can.width, this.can.height)
      this.ctx.beginPath()
      this.ctx.fillStyle = this.colorLeft
      this.ctx.lineTo(0, 0)
      this.leftNow = this.leftNow + this.leftStep
      this.ctx.lineTo(this.leftNow, 0)
      const lx = this.leftNow > this.height ? this.leftNow - this.height : 0
      const ly = lx > 0 ? this.height : this.leftNow
      this.ctx.lineTo(lx, ly)
      this.ctx.lineTo(0, ly)
      this.ctx.closePath()
      this.ctx.fill()

      this.ctx.beginPath()
      this.ctx.fillStyle = this.colorRight
      this.ctx.lineTo(this.width, this.height)
      this.rightNow = this.rightNow + this.rightStep
      this.ctx.lineTo(this.width - this.rightNow, this.height)
      const rx = this.rightNow > this.height ? this.rightNow - this.height : 0
      const ry = lx > 0 ? this.height : this.rightNow
      this.ctx.lineTo(this.width - rx, this.height - ry)
      this.ctx.lineTo(this.width, this.height - ry)
      this.ctx.closePath()
      this.ctx.fill()
      this.count--
      if (this.count > 0) {
        this.timer = setTimeout(() => {
          window.requestAnimationFrame(this.draw)
        }, 40)
      }
    }
  }

}
</script>
<style lang="less">
.yh-progress-bar-1 {
    color: #fff;
}
    
</style>
