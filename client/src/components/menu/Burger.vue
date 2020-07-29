<template>
  <div id="burger">
    <button class='burger-button'
      v-on:click="toggle">
        <i class="material-icons">menu</i>
      </button>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js';

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },

  methods: {
    toggle() {
      mutations.toggleNav();
    },
  },
};
</script>
<style>
  .burger-button {
    position: relative;
    display: block;
    z-index: 999;
  }
  #burger {
    position: absolute;
    top: 0.7%;
  }
</style>
