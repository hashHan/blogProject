<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div :id="mysection+each.number" class="post-preview" 
                v-for="(each, index) in hardContent" :key="index">
            <a href="#">
              <h2 class="post-title">
                {{ each.title }}
              </h2>
              <p class="post-date">
                {{ each.date }}
              <h3 class="post-contents">
                <span v-html="each.body"></span>
              </h3>
            </a>
            <hr>
          </div>
          
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-link float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      mysection: "posts"
    }
  },
  computed: {
       ...mapGetters({
            hardContent: 'getposts' //getter
       })
  },
  components:{
    
  }
}
</script>
<style scoped>
a {
   color: black
}
a:focus {
    text-decoration: none;
    color: black;
}
a:hover {
    text-decoration: none;
    color: rgb(173, 172, 172);
}
.post-title {
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.post-contents {
  font-weight: 300;
  margin: 0 0 10px;
}
  
.post-date {
  font-size: 18px;
  font-style: italic;
  margin-top: 0;
  color: gray;
}


@media only screen and (min-width: 768px) {
  .post-title{       
    font-size: 36px;      
  }
}


</style>
