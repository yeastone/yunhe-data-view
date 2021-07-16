<template>
  <div class="yh-login-page-1" :ref="ref">
    <div class="content" v-on:keyup.enter="login">
      <div class="title-con">
        <img src="./assets/images/login_logo.png" />
        <h1 class="title">
          {{title}}
        </h1>
        <blink-star
          class="star"
          v-for="index of 18"
          :key="index"
          :style="{
            top: randomNum(2, 90) + '%',
            left: index < 9 ? randomNum(0, 30) + '%' : randomNum(70, 100) + '%',
            width: randomNum(12, 22) + 'px'
          }"
          :blink="randomNum(0, 100)"
        ></blink-star>
      </div>

      <el-form class="login-form">
        <p class="form-title">登陆</p>
        <el-form-item>
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名"
            class="primary-input"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            class="primary-input password-input"
            v-model="formData.password"
            :type="showPwd ? 'text' : 'password'"
            placeholder="请输入密码"
            @click.native="togglePwdShow"
            :suffix-icon="
              showPwd ? 'iconfont icon-logineye' : 'iconfont icon-logineyeslash'
            "
          ></el-input>
        </el-form-item>
        <el-form-item class="inline-form-item" label="">
          <el-input
            v-model="formData.code"
            placeholder="请输入验证码"
            class="inline-input primary-input"
          ></el-input>
          <image-verify
            @pid-change="pidChange"
            @loadImgSrc="loadImgSrc"
            ref="loginImageVerify"
          ></image-verify>
        </el-form-item>
        <el-form-item class="btn-content"
          ><el-checkbox
            v-model="rememberUsername"
            label="记住用户名"
            class="remember-user"
          ></el-checkbox
        ></el-form-item>
        <el-form-item>
          <el-button
            class="primary-btn login-btn"
            @click="login"
            :loading="loginLoading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import ImageVerify from './components/imageVerify/'
import BlinkStar from './components/blinkStar'
export default {
  name: 'YhLoginPage1',
  components: { ImageVerify, BlinkStar },
  props: {
    loginLoading: Boolean,
    title: String
  },
  data () {
    return {
      ref: 'login-page-1',
      formData: {
        username: '',
        password: '',
        code: '',
        pid: ''
      },
      showPwd: false,
      rememberUsername: false
    }
  },
  methods: {
    randomNum (minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default:
          return 0
      }
    },
    pidChange (pid) {
      this.formData.pid = pid
    },
    loadImgSrc () {
      this.$emit('loadImgSrc')
    },
    login () {
      const { username, password, pid, code } = this.formData
      if (username === '' || password === '' || pid === '' || code === '') { return }
      this.$emit('login', this.formData)
    },
    setRememberUsername () {
      if (this.rememberUsername) {
        window.localStorage.setItem(
          'rememberUsername',
          this.formData.username
        )
      }
    },
    togglePwdShow (e) {
      const classList = Array.prototype.slice.call(e.target.classList)
      if (classList.indexOf('icon-logineye') >= 0) {
        this.showPwd = false
      }
      if (classList.indexOf('icon-logineyeslash') >= 0) {
        this.showPwd = true
      }
    }
  },
  created () {
    if (window.localStorage.getItem('rememberUsername')) {
      this.rememberUsername = true
      this.formData.username = window.localStorage.getItem('rememberUsername')
    }
  },
  mounted () {}
}
</script>