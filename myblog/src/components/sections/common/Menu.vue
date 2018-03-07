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
import portfolios from '../../../data/portfolios';
import myArticle from './Article.vue';

export default {
  data(){
    return {
      hardContent: portfolios,
      articleindex: 0
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
