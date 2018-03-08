<template>
  <div id="menu">   
    <div id="accordion">
      <div :id="mysection" class="card bg-light mb-3" v-for="(each, index) in hardContent" :key="index">
        <div class="card-header" :id="'heading' + mysection + each.number">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapse'+ mysection + each.number" 
                    aria-expanded="true" :aria-controls="'#collapse'+mysection+each.number">
              <div class="row justify-content-between">
                  <div class="col col-auto d-none d-md-block">
                      #{{ each.number}} / {{ each.date }}
                  </div>
                  <div class="col">
                      {{ each.title }}
                  </div>
              </div>     
            </button>
          </h5>
        </div>

        <div :id="'collapse'+ mysection + each.number" class="collapse show" 
              :aria-labelledby="'heading' + mysection + each.number" data-parent="#accordion">
          <div class="card-body">
            <span v-html="each.body"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['hardContent', 'articleindex', 'mysection'],
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
     //
  }
}
</script>
<style>

</style>
