<template>
  <div id="portfolios">
      portfolios[MENU, Article]
      <app-menu></app-menu>
      <app-article></app-article>
  </div>
</template>
<script>
import Article from '../common/Article.vue';
import Menu from '../common/Menu.vue';

export default {
  components:{
    appArticle: Article,
    appMenu: Menu
  }
}
</script>
<style>

</style>
