<template>
  <div id="main">
      main[Portfolios, Posts]<br>
      <hr>
      from main: <app-portfolios></app-portfolios>
      <br><hr><br>
      from main: <app-posts></app-posts>
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
