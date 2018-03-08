<template>
  <div id="portfolio-modal">
    <div v-for="(each, index) in hardContent" :key="index">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+mysection+each.number">
        {{ each.title }}
      </button>

      <!-- Modal -->
      <div class="modal fade" :id="mysection+each.number" tabindex="-1" role="dialog" 
            :aria-labelledby="mysection+each.number+'LongTitle'" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" :id="mysection+each.number+'LongTitle'">{{ each.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <span v-html="each.body"></span>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
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
      mysection: "portfolios"
    }
  },
  computed: {
       ...mapGetters({
            hardContent: 'getportfolios' //getter
       })
  },
  components:{
  
  }
}
</script>
<style>

</style>
