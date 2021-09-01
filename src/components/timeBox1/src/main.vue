<template>
  <div class="yh-time-box-1" :ref="ref">
    <div class="date" :style="{ color: color }">{{ date }}</div>
    <div class="time" :style="{ color: color }">{{ time }}</div>
  </div>
</template>
<script>
export default {
  name: "YhTimeBox1",
  props: {
    color: {
      type: String,
      default: "#00DEFE"
    }
  },
  data() {
    return {
      ref: "time-box-1",
      date: "",
      time: ""
    };
  },
  created() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 10);
  },
  methods: {
    updateTime() {
      const checkFormat = str => {
        str = str.toString();
        if (str.length < 2) {
          str = "0" + str;
        }
        return str;
      };
      const now = new Date();
      const year = now.getFullYear();
      const mon = checkFormat(now.getMonth() + 1);
      const day = checkFormat(now.getDate());
      const hour = checkFormat(now.getHours());
      const min = checkFormat(now.getMinutes());
      const sec = checkFormat(now.getSeconds());

      this.date = `${year}年${mon}月${day}日`;
      this.time = `${hour}:${min}:${sec}`;
    }
  }
};
</script>
<style lang="less">
@font-face {
  font-family: "fxLed";
  src: url("../assets/FX-LED.TTF") format("truetype");
}
.yh-time-box-1 {
  width: 175px;
  display: inline-block;
  .date {
    font-size: 18px;
    line-height: 18px;
    text-align: right;
    letter-spacing: 2px;
  }
  .time {
    font-family: "fxLed";
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 0;
  }
}
</style>
