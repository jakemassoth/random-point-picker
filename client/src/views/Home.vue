<template>
  <div>
    <Sidebar>
        <label for="baseLocation">Starting Point</label>
        <input type="text" placeholder="enter a location" v-model="baseLocation">
        <label for="radius">Radius</label>
        <input type="text" placeholder="enter a radius" v-model="radius">
        <input type="submit" value="Submit" v-on:click="optionsSubmit">
      </Sidebar>
    <Burger/>
    <Map :centerLocation="coords" :radiusSize="radiusSizeInKm"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Burger from '@/components/menu/Burger.vue';
import Sidebar from '@/components/menu/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Burger,
    Sidebar,
  },
  data() {
    return {
      coords: [4.8945, 52.367],
      radiusSizeInKm: 4,
    };
  },
  methods: {
    optionsSubmit() {
      const coordsArr = this.baseLocation.split(',').map(Number);
      this.coords = coordsArr;
      this.radiusSizeInKm = this.radius;
    },
  },
};
</script>

<style>

</style>
