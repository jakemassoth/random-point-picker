<template>
  <div>
    <Sidebar>
      <form>
        <input type="text" placeholder="enter a location" id="baseLocation">
        <label for="baseLocation">Starting Point</label>
        <input type="text" placeholder="enter a location" id="baseLocation">
        <label for="baseLocation">Starting Point</label>
      </form>
    </Sidebar>

    <Burger/>
    <Map/>
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
};
</script>

<style>
html {
   height: 100%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 input {
   margin-bottom: 5%;
 }

</style>
