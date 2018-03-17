<template>
  <div name="postmain">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div :id="mysection+each.number" class="post-preview" 
                v-for="(each, index) in hardContent" :key="index">
            <a>
              <h2 class="post-title" @click="selectThis(each, index)">
                {{ each.title }}
              </h2>
              <p class="post-date">
                {{ each.date }}
              <div v-show="showIndex === index" class="post-contents">
                <!-- {{ each.body }} -->
                <app-post :body="each.body"></app-post>
                <!-- <span v-html="each.body"></span> -->
              </div>
            </a>
            <hr>
          </div>
          
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-link float-right" href="/">HOME</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import post1 from './post/post1.vue';


export default {
  data(){
    return {
      mysection: "posts",
      showIndex: 0
    }
  },
  computed: {
       ...mapGetters({
            hardContent: 'getfetchedposts' //getter
       })
  },
  methods: {
    selectThis(val, index) {
      this.showIndex = index;
    }
  },
  components:{
    appPost: post1
  }
}
</script>
<style lang="scss" scoped>
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
