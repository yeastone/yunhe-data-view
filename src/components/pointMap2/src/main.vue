<template>
    <div class="yh-point-map-2" :ref="ref">
        <div class="map-content" :id="mapId"></div>
    </div>
</template>
<script>
import { AMapLoader, uuid } from '../../../util/index'

import { GaodeMap } from '@antv/l7-maps'
import { Scene, PointLayer } from '@antv/l7'

export default {
  name: 'YhPointMap2',
  props: {
    mapOptions: {
      type: Object,
      default: () => {
        return {
          viewMode: '3D',
          pitch: 15,
          zooms: [10, 18],
          //   center: [120.1685230912123, 30.247550898531323],
          mapStyle: 'amap://styles/734220c4df8ffca7cc6d236a47389f43'
        }
      }
    },
    mapData: {
      type: Array,
      default: () => []
    },
    pointColor: {
      type: String,
      default: '#2DE2D4'
    },
    pointSize: {
      type: Number,
      default: 2
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'yh-point-map-2',
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
          },
          cluster: true,
          clusterOption: {
            radius: 2.5
          }
        })
        .shape('circle')
        .scale('count', {
          type: 'quantile'
        })
        .size('count', [0.5, 1, 1.5, 2, 2.5])
        .active(true)
        .color(this.pointColor)
        .style({
          opacity: 0.5,
          strokeWidth: 1
        })
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
.yh-point-map-2 {
    position: relative;
    height: 100%;
    width: 100%;
    .map-content{
        height: 100%;
    }
}
</style>
