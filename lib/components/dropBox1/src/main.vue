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