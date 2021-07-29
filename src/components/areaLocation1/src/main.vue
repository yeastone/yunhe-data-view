<template>
    <div class="yh-area-location-1" :ref="ref">
        <div class="bg"></div>
        <div class="bg-line"></div>
        <div class="location-body">
            <img src="./images/location_icon.svg" class="location-icon">
                <el-cascader
                class="select-district location-name"
                ref="yh-area-location-1-cascader"
                placeholder="加载中..."
                v-model="selectDistrict"
                :options="areaOptions"
                :props="areaProps"
                filterable
                size="mini"
                @change="districtChange"
                :show-all-levels="false"
                popper-class="yh-area-location-1-selector"
                ></el-cascader>
            <div class="area-location-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'YhAreaLocation1',
  props: {
    areaOptions: Array,
    areaProps: {
      type: Object,
      default: () => {
        return {
          value: 'adcode',
          label: 'name',
          checkStrictly: 'true'
        }
      }
    }
  },
  data () {
    return {
      ref: 'yh-area-location-1',
      selectDistrict: []
    }
  },
  methods: {
    districtChange (value) {
      this.$emit('districtChange', value)
      this.$refs['yh-area-location-1-cascader'].dropDownVisible = false
    }
  }
}
</script>
<style lang="less">
.yh-area-location-1 {
    height: 52px;
    position: relative;
    z-index: 0;
    text-align: left;
    .location-body {
        z-index: 10;
        line-height: 52px;
        height: 52px;
        .location-icon {
            vertical-align: middle;
            margin: 0 15px;
            line-height: 52px;
            color: rgba(0,222,254,1);
            font-size: 38px;
        }
        .select-district {
            max-width: 140px;
            vertical-align: top;
            height: 50px;
            .el-input {
                height: 50px;
            }
            .el-input__inner {
                line-height: 50px;
                height: 50px;
                border:none;
                background: transparent;
                color: #00defe;
                font-size: 24px;
                padding-left: 0;
                font-weight: 600;
            }
            .el-input__icon {
                font-size: 24px;
                color: #00defe;
            }
        }
    }
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        height: 52px;
        width: 231px;
        background-image: linear-gradient(270deg, rgba(1,7,30,0.00) 0%, rgba(34,115,210,0.7) 100%);
        &::after, &::before{
            content: '';
            position: absolute;
            left: 0;
            width: 231px;
            height: 1px;
            background-image:linear-gradient(270deg, rgba(37,194,255,0) 0%,  rgba(16,143,255,1) 100%);
        }
        &::after {
            top: 0;
        }
        &::before {
            bottom: 0;
        }
    }
    .bg-line{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        height: 52px;
        width: 4px;
        // opacity: 0.7;
        background: rgba(0,222,254,1);
    }
}
// 城市选择器下拉框
.yh-area-location-1-selector {
  background-color: rgba(4, 15, 53, 0.85) !important;
  border: 1px solid #00defe !important;
  box-shadow: inset 0 0 5px rgba(0, 144, 255, 0.65) !important;
  .el-cascader-menu {
    border-right: 2px solid #00defe;
  }
  .el-cascader-node {
    color: #fff;
    .el-cascader-node__label {
      font-size: 14px;
    }
  }
  .el-radio__inner {
    width: 12px;
    height: 12px;
    line-height: 16px;
    vertical-align: baseline;
  }
  .el-cascader-node:not(.is-disabled):focus,
  .el-cascader-node:not(.is-disabled):hover {
    background: #2c5383;
  }
  .el-radio__inner {
    background-color: transparent;
  }
  .el-radio__inner:hover {
    // background-color: transparent;
    border-width: 2px;
  }
  .el-radio__input.is-disabled .el-radio__inner {
    // background-color: transparent;
    border-color: #fafafb;
  }

  .el-cascader__dropdown {
    background: transparent;
    border-color: #00defe;
  }
  .el-cascader-panel {
    background: transparent;
  }
  .el-cascader-node.is-selectable.in-active-path {
    color: #fff;
  }
  .popper__arrow {
    border-bottom-color: #00defe !important;
  }
  .popper__arrow::after {
    top: -1px !important;
    border-bottom-color: #00defe !important;
  }
}
</style>
