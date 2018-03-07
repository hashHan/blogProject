<template>
  <div id="menu">   
    <div id="accordion">
      <div :id="mysection" class="card" v-for="(each, index) in hardContent" :key="index">
        <div class="card-header" :id="'heading' + mysection + each.number">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapse'+ mysection + each.number" 
                    aria-expanded="true" :aria-controls="'#collapse'+mysection+each.number">
                      #{{ each.number}}. {{ each.title }} <h6>{{ each.date }}</h6>
            </button>
          </h5>
        </div>

        <div :id="'collapse'+ mysection + each.number" class="collapse show" 
              :aria-labelledby="'heading' + mysection + each.number" data-parent="#accordion">
          <div class="card-body">
            {{ each.body}}
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
