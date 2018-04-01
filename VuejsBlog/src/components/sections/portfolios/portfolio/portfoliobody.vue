<template>
    <!-- Modal body -->
    <div class="container">
        <slot name="figurespace">    
          figure space
        </slot>
        <div class="mb-5">
            <h4>SKILLS</h4>
            <ul class="list-group">
                <li class="skills list-group-item">
                    {{body.skills}}
                </li>
            </ul>
        </div>
        <div class="">
            <h4>CONTENT</h4>
            <ul class="list-group text-left">
                <li class="processes list-group-item">
                    {{body.content}}
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
