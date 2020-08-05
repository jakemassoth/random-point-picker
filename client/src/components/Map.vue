<template>
  <div id='mapContainer' class='basemap'></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import circle from '@turf/circle';

export default {
  name: 'Map',
  props: {
    centerLocation: null,
    radiusSize: null,
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYmx1em9tYnkiLCJhIjoiY2l6Y3A5djd1MDAzeDM0bWQzaDA3MXNyYyJ9.uCZyRoQn-yV0ZD1xg5v7gw',
      map: '',
      baseMarker: '',
      circle: '',
      options: {
        steps: 64,
        units: 'kilometers',
      },
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerLocation,
      zoom: 12,
    });

    this.baseMarker = new mapboxgl.Marker();

    this.baseMarker.setLngLat(this.centerLocation);
    this.baseMarker.addTo(this.map);

    this.circle = circle(this.centerLocation, this.radiusSize, this.options);
    this.map.on('styledata', () => {
      const waiting = () => {
        if (!this.map.isStyleLoaded()) {
          setTimeout(waiting, 200);
        } else {
          this.addCircle(this.circle);
        }
      };
      waiting();
    });
  },

  watch: {
    centerLocation() {
      this.map.flyTo({
        center: this.centerLocation,
      });
      this.baseMarker.setLngLat(this.centerLocation);
      this.baseMarker.addTo(this.map);

      this.circle = circle(this.centerLocation, this.radiusSize, this.options);
      this.map.getSource('circleRadius').setData(this.circle);
    },
  },

  methods: {
    addCircle(newCircle) {
      this.map.addSource('circleRadius', {
        type: 'geojson',
        data: newCircle,
      });
      this.map.addLayer({
        id: 'circle',
        type: 'fill',
        source: 'circleRadius',
        layout: {},
        paint: {
          'fill-color': 'pink',
          'fill-opacity': 0.5,
        },
      });
    },
  },

};
</script>

<style>
    #mapContainer {
        height: 100vh;
    }
</style>
