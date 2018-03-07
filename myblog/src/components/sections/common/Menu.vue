<template>
  <div id="menu">
    menu -get and show titles and dates
    <br><br>
    <br><br>
    <div v-for="(each, index) in hardContent" :key="index" class="loop-menu">
          <div class="post-number">
              {{ each.number}}
            
          </div>   
          <div class="post-title" :value="each.number" @click="articlenumber"> 
              {{ each.title }}
             
          </div>
          <div class="post-date">
              {{ each.date }}
          </div>
    </div>
    <div>
        from article:
        {{articleindex}}    
        {{hardContent[articleindex].body}}   
        <!-- <app-myarticle>
           <span slot="articleBody">change body</span>
        </app-myarticle> -->
        <br>
    </div>
  </div>
</template>
<script>
import myArticle from './Article.vue';

export default {
  props: ['hardContent', 'articleindex'],
  data(){
    return {

    }
  },
  computed:{
  
  },
  methods:{
    articlenumber(){
      //console.log(event.target.getAttribute('value'));
      this.articleindex = event.target.getAttribute('value')-1;
    }
  },
  components:{
      appMyarticle: myArticle
  }
}
</script>
<style>

</style>
