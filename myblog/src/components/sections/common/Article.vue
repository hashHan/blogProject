<template>
  <div id="article" @click="showit=!showit">
      article - I don't need this component. 
      <br>show each article.
      <div class="body" v-if="showit">
          <slot name="articleBody">it will replaced by parents</slot>
      </div>     
  </div>
</template>
<script>


export default {
  data(){
    return {
      showit: true
    }
  }
}
</script>
<style>

</style>
