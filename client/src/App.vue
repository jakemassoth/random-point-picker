<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<style>
@import 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import url('https://fonts.googleapis.com/css2?family=Lato');

html {
  height: 100%;
  overflow:hidden;
}

body {
  border: 0; margin: 0; padding: 0;
  font-family: 'Lato', sans-serif;
  height: 100%;
}
</style>
