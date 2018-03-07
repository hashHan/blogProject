<template>
  <div id="portfolios">
      <app-menu :hardContent="hardContent" :articleindex="articleindex"></app-menu>
  </div>
</template>
<script>
import Menu from '../common/Menu.vue';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      articleindex: 0,
      mysection: "portfolios"
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
