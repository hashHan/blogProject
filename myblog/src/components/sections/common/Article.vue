<template>
  <div id="article">
      article - show each article.
      <article>
        <div class="title">
            {{ hardContent[0].title }}
        </div>
        <div class="date">
            {{ hardContent[0].date }}
        </div>
        <div class="body">
            {{ hardContent[0].body }}
        </div>
      </article>
  </div>
</template>
<script>
import portfolios from '../../../data/portfolios';

export default {
  data(){
    return {
      hardContent: portfolios
    }
  }
}
</script>
<style>

</style>
