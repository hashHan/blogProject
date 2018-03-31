<template>
    <div id="admin" class="container">
        <p>This page is used for writing post and portfolio and save them to database</p>
         <button class="btn btn-primary">upload All Posts(DO NOT USE)</button>
         <button class="btn btn-primary" @click="uploadAllPortfolios">upload All Portfolios(DO NOT USE)</button>
        <br>
        
        <br>
        <button class="btn btn-primary">upload one Posts</button>
        <button class="btn btn-primary">upload one Portfolios</button>
        <button class="btn btn-primary" @click="fetchAllPosts">fetch all Posts</button>
        <button class="btn btn-primary" @click="fetchAllPortfolios">fetch all Portfolios</button>
    </div>
</template>
<script>
//import axios from 'axios';
//import {mapGetters} from 'vuex';
export default {
 
   computed: {
      //  ...mapGetters({
      //       posts: 'getposts', //getter
      //       portfolios: 'getportfolios'
      //  })
   },
   methods: {
       fetchAllPortfolios(){
         console.log('buttonclicked');
         this.$store.dispatch('fetchAllPortfolios');
       },
       fetchAllPosts(){
         console.log('buttonclicked');
         this.$store.dispatch('fetchAllPosts');
       },
      uploadAllPosts () {
        console.log('buttonclicked');
        this.$store.dispatch('storeallposts');
      },
      uploadAllPortfolios () {
        console.log('buttonclicked');
        this.$store.dispatch('storeallportfolios');
      }
      
   }
}
</script>
<style>

</style>
