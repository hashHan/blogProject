<template>
  <div id="main">
      main
      <app-portfolios></app-portfolios>
      <app-posts></app-posts>
  </div>
</template>
<script>
import Portfolios from './sections/Portfolios/Portfolios.vue';
import Posts from './sections/Posts/Posts.vue';

export default {
  components:{
    appPortfolios: Portfolios,
    appPosts: Posts
  }
}
</script>
<style>

</style>
