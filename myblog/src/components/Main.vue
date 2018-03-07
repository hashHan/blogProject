<template>
  <div id="main">
      <app-portfolios></app-portfolios>
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
