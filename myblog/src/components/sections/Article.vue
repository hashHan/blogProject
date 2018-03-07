<template>
  <div id="article">
      article - show each article.
      <article>
        <div class="title">
            {{ hardContent.title }}
        </div>
        <div class="date">
            {{ hardContent.date }}
        </div>
        <div class="body">
            {{ hardContent.body }}
        </div>
      </article>
  </div>
</template>
<script>
export default {
  data(){
    return {
      hardContent:
        { 
          number:1,
          date: 'date1',
          title: 'title1',
          body: 'body1'
        }
    }
  }
}
</script>
<style>

</style>
