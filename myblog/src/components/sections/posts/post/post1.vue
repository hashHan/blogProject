<template>
    <!-- Modal body -->
    <div class="container text-left">
        <!-- {{body}} -->
        <div class="" v-for="(paragraph, index) in body" :key="index">
            <p :id="'p-'+index" v-html='paragraph'></p>
        </div>
    </div>
</template>
<script>
export default {
  props: ['body'],
  data(){
    return {
      
    }
  },
  computed: {
      
  },
  components:{
  
  }
}
</script>
<style>

</style>
