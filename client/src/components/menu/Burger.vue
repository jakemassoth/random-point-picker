<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }">
    <button class='burger-button'
      v-on:click="toggle">
        <i class="material-icons">chevron_right</i>
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
    background: transparent;
    border: none !important;
    outline: none;
  }

  #burger {
    position: absolute;
    top: 50%;
    transition: all 150ms ease-in 0s;
    z-index: 999;
  }

  #burger.active {
    transform: translateX(340px);
    z-index: 999;
  }

  .material-icons {
    font-size: 50px;
  }

</style>
