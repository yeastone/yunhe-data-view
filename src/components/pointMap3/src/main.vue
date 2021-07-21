<template>
    <div class="yh-point-map-3" :ref="ref">
        <div class="map-content" :id="mapId"></div>
    </div>
</template>
<script>
import { AMapLoader, uuid } from '../../../util/index'

import { GaodeMap } from '@antv/l7-maps'
import { Scene, PointLayer } from '@antv/l7'

export default {
  name: 'YhPointMap3',
  props: {
    mapOptions: {
      type: Object,
      default: () => {
        return {
          viewMode: '3D',
          pitch: 15,
          zooms: [10, 18],
          mapStyle: 'amap://styles/734220c4df8ffca7cc6d236a47389f43'
        }
      }
    },
    mapData: {
      type: Array,
      default: () => []
    },
    pointColors: {
      type: Array,
      default: () => [
        '#34B6B7',
        '#4AC5AF',
        '#5FD3A6',
        '#7BE39E',
        '#A1EDB8',
        '#CEF8D6'
      ]
    },
    pointSizes: {
      type: Array,
      default: () => [
        0, 16
      ]
    },
    pointStyle: {
      type: Object,
      default: () => ({
        opacity: 0.5,
        strokeWidth: 0
      })
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'yh-point-map-3',
      mapId: `point-map-id-${id}`,
      sceneDone: false
    }
  },
  watch: {
    mapData (newV) {
      console.log(newV)
      this.updatedMapData(newV)
    }
  },
  mounted () {
    if (!window.AMap) {
      AMapLoader().then(() => {
        this.$emit('AMapLoaded')
        this.initAmap()
      })
    } else {
      this.initAmap()
    }
  },
  methods: {
    initAmap () {
      this.AMap = window.AMap
      this.pointMap = new this.AMap.Map(this.mapId, this.mapOptions)
      this.initScene()
    },
    initScene () {
      this.scene = new Scene({
        id: this.mapId,
        logoVisible: false,
        map: new GaodeMap({
          mapInstance: this.pointMap
        })
      })
      this.scene.on('loaded', () => {
        this.sceneDone = true
        this.sceneLoaded()
      })
    },
    sceneLoaded () {
      console.log('sceneLoaded', this.mapData)
      this.pointLayer = new PointLayer({
        autoFit: true
      })
        .source(this.mapData, {
          parser: {
            type: 'json',
            x: 'lng',
            y: 'lat'
          }
        })
        .shape('circle')
        .color('count', this.pointColors)
        .size('count', this.pointSizes)
        .style(this.pointStyle)
      this.scene.addLayer(this.pointLayer)
    },
    updatedMapData (data) {
      if (this.sceneDone) {
        this.pointLayer.setData(data)
        this.pointLayer.fitBounds()
      } else {
        console.log('scene 还没好')
      }
    }
  }
}
</script>
<style lang="less">
.yh-point-map-3 {
    position: relative;
    height: 100%;
    width: 100%;
    .map-content{
        height: 100%;
    }
}
</style>
