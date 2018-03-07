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
export default {
  data(){
    return {
      hardContent:[
        { 
          number:1,
          date: 'date1',
          title: 'title1',
          body: 'body1'
        },
        {
          number:2,
          date: 'date2',
          title: 'title2',
          body: 'body2'
        }
      ]
    }
  }
}
</script>
<style>

</style>
