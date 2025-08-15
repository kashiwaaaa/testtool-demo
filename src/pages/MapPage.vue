
<template>
  <div>
    <h1>地図画面</h1>
    <div id="map" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script setup lang="ts">
import * as maplibregl from 'maplibre-gl'
import { onMounted } from 'vue'


onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [139.6917, 35.6895],
    zoom: 10,
  })

  new maplibregl.Marker().setLngLat([139.6917, 35.6895]).addTo(map)
})

</script>
