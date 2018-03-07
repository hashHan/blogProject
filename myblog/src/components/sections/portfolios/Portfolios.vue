<template>
  <div id="portfolios">
      portfolios[MENU, Article]
      <app-menu></app-menu>
      <app-article></app-article>
  </div>
</template>
<script>
import Article from '../Article.vue';
import Menu from '../Menu.vue';

export default {
  components:{
    appArticle: Article,
    appMenu: Menu
  }
}
</script>
<style>

</style>
