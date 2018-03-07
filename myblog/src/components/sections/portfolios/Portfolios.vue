<template>
  <div id="portfolios">
      portfolios
      <app-menu></app-menu>
      <app-eachselected></app-eachselected>
  </div>
</template>
<script>
import Eachselected from '../Eachselected.vue';
import Menu from '../Menu.vue';

export default {
  components:{
    appEachselected: Eachselected,
    appMenu: Menu
  }
}
</script>
<style>

</style>
