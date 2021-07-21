<template>
  <div class="yh-drop-box-1" :ref="ref">
    <div class="name" @click="showDropMenu = !showDropMenu">
      <p class="username"><i class="el-icon-setting" :style="{color: showDropMenu ? '#00defe' : '#ddd' }"></i></p>
    </div>
    <div class="drop-menu" v-show="showDropMenu">
            <div class="drop-menu-item"
                v-for="item in dropConfig"
                :key="item.emit"
                @click="menuItemClick(item.emit)"
                >
                <i :class="item.icon"></i>{{item.label}}</div>
        <!-- <corner></corner> -->
    </div>
  </div>
</template>

<script>
// import Corner from '@/components/corner'
export default {
  name: 'YhDropBox1',
  components: {
    // Corner
  },
  props: {
    dropConfig: {
      type: Array,
      default: () => [
        {
          icon: 'el-icon-switch-button',
          label: '退出',
          emit: 'logout'
        }
      ]
    }
  },
  data () {
    return {
      ref: 'drop-box-1',
      showDropMenu: false
    }
  },
  methods: {
    menuItemClick (emit) {
      this.showDropMenu = false
      this.$emit(emit)
    }
  }
}
</script>
<style lang="less" scoped>
.yh-drop-box-1 {
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
    height: 52px;
    width: 52px;
    margin: 0px 32px 8px 20px;
    background: rgba(5,17,46,0.35);
    border: 1px solid rgba(16,143,255,0.35);
    box-shadow: inset 0 0 18px 5px rgba(0,100,184,0.35);
    border-radius: 1px;
    position: relative;
    .name {
        // position: relative;
        i {
            color: #fff;
            line-height: 50px;
            font-size: 32px;
        }
    }
    .drop-menu {
        // min-width: 100px;
        position: absolute;
        top: 60px;
        right: 0px;
        font-size: 14px;
        // height: 90px;
        background-color: #05112e;
        // border-radius: 4px;
        border: solid 1px #108fff;
        line-height: 32px;
        .drop-menu-item {
            // display: inline-block;
            // min-width: 120px;
            text-align: left;
            white-space: nowrap;
            padding: 0 10px;
            color: #fff;
            i{
                display: inline-block;
                margin-right: 10px;
            }
            &:hover {
                background-color: #108fff;
                cursor: pointer;
            }
        }
    }
    &:hover {
      border: 1px solid rgba(16,143,255,1);
      box-shadow: inset 0 0 18px 5px rgba(0,100,184,0.65);
      .name {
        i {
          color: rgba(16,143,255,1);
        }
      }

    }

}
</style>
