<template>
    <div class="yh-area-location-1" :ref="ref">
        <div class="bg"></div>
        <div class="bg-line"></div>
        <div class="location-body">
            <img @click="iconClick" src="./images/location_icon.svg" class="location-icon" />
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
    iconClick() {
      this.$emit("iconClick");
    },
    districtChange (value) {
      this.$emit('districtChange', value)
      this.$refs['yh-area-location-1-cascader'].dropDownVisible = false
    }
  }
}
</script>