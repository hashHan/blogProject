<template>
  <div name="portfolio-modal">
    <div class="mb-5" v-for="each in hardContent.slice().reverse()" :key="each.updatedDate">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-light portfolio-button" data-toggle="modal" :data-target="'#'+mysection+each.id">
        <div class="row justify-content-left">
          <div class="col-5">
             <img class="img-fluid" :src="each.thumbnail" alt="thumbnail image">
          </div>
          <div class="col-5 auto mt-4 button-text">   
             <p>{{ each.title }}</p>
          </div>
        </div>
      </button>

      <!-- Modal -->
      <div class="modal fade" :id="mysection+each.id" tabindex="-1" role="dialog" 
            :aria-labelledby="mysection+each.id+'LongTitle'" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" :id="mysection+each.id+'LongTitle'">{{ each.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <app-portfoliobody :body="each">
                <figure slot="figurespace" class="figure">
                  <img :src="each.thumbnail" class="figure-img img-fluid rounded" alt="figure of this portfolio">
                  <figcaption class="figure-caption text-right">
                      <a :href="each.link">LINK</a>
                  </figcaption>
                </figure>
              </app-portfoliobody>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div @click="showhardcontent">showhardcontent</div> -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import portfoliobody from './portfolio/portfoliobody.vue'

export default {
  data(){
    return {
      mysection: "portfolios"
    }
  },
  computed: {
       ...mapGetters({
            hardContent: 'getfetchedportfolios' //getter
       })
  },
  methods:{
    // showhardcontent(){
    //   console.log(this.hardContent);
    // }
  },
  components:{
    appPortfoliobody: portfoliobody
  },
  created () {
      this.$store.dispatch('fetchAllPortfolios')
  }
}
</script>
<style lang="scss">
$smallsize: 500px;

.portfolio-button{
  width: 80%;  
  
}
.button-text{
    @media screen and (max-width:$smallsize){
      font-size: 0.6em;
    }
  }

</style>
