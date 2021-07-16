<template>
  <div class="shine shine2" :data-blink="blink"></div>
</template>

<script>
export default {
  name: 'blinkStar',
  props: {
    blink: Number
  }
}
</script>
<style lang="less" scoped>
.shine {
  background: center/contain url(./shine.png) no-repeat;
  position: absolute;
  animation: opacity-change 1s ease-in-out infinite;
  -webkit-animation: opacity-change 1s ease-in-out infinite;
  -moz-animation: opacity-change 1s ease-in-out infinite;
  -o-animation: opacity-change 1s ease-in-out infinite;
}

.shine2 {
  animation: opacity-change 1.75s ease-in-out infinite;
  -webkit-animation: opacity-change 1.75s ease-in-out infinite;
  -moz-animation: opacity-change 1.75s ease-in-out infinite;
  -o-animation: opacity-change 1.75s ease-in-out infinite;
  content:  ~`
  Math.round(Math.random() * 10)
  `;;
}

@keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
