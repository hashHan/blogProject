<template>
  <div id="portfolios">
      portfolios[MENU, Article]<br>
      from portfolio: 
      <app-menu :hardContent="hardContent" :articleindex="articleindex"></app-menu>
  </div>
</template>
<script>
import Menu from '../common/Menu.vue';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      articleindex: 0
    }
  },
  computed: {
       ...mapGetters({
            hardContent: 'getportfolios' //getter
       })
  },
  components:{
    appMenu: Menu
  }
}
</script>
<style>

</style>
