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