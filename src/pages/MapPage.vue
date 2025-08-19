<script setup lang="ts">
import * as maplibregl from 'maplibre-gl'
import { onMounted } from 'vue'


onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        pale: {
          type: 'raster',
          tiles: [
            'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '地図データ：<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
        }
      },
      layers: [
        {
          id: 'pale',
          type: 'raster',
          source: 'pale',
        }
      ]
    },
    center: [139.735028, 35.693825], // 市ヶ谷駅
    zoom: 16,
  })

  new maplibregl.Marker().setLngLat([139.735028, 35.693825]).addTo(map)
})

</script>
<template>
  <div id="map" class="fixed inset-x-0 top-16 w-screen h-[calc(100vh-4rem)] z-0"></div>
</template>
