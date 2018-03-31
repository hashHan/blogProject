<template>
    <!-- Modal body -->
    <div class="container">
        <slot name="figurespace">    
          figure space
        </slot>
        <div class="mb-5">
            <h4>SKILLS</h4>
            <ul class="list-group">
                <li class="skills list-group-item" v-for="(skill, index) in body.skills" :key="index">
                    {{skill}}
                </li>
            </ul>
        </div>
        <div class="">
            <h4>PROCESS</h4>
            <ul class="list-group text-left">
                <li class="processes list-group-item" v-for="(process, index) in body.processes" :key="index">
                    {{index+1}}. {{process}}
                </li>
            </ul>
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
  methods:{
    //   loadImg: function (path) {
    //      return require(path);
    //   }
  },
  computed: {
      
  },

  components:{
  
  }
}
</script>
<style>

</style>
