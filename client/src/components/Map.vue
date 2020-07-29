<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  name: 'Map',
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYmx1em9tYnkiLCJhIjoiY2l6Y3A5djd1MDAzeDM0bWQzaDA3MXNyYyJ9.uCZyRoQn-yV0ZD1xg5v7gw',
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });
    return map;
  },
};
</script>

<style>
    #mapContainer {
        height: 100vh;
    }
</style>
