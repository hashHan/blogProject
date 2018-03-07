<template>
  <div id="menu">
    menu -get and show titles and dates
    <div v-for="(each, index) in hardContent " :key="index" class="loop-menu">
        <div class="title">
            {{ each.title }}
        </div>
        <div class="date">
            {{ each.date }}
        </div>
    </div>
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
