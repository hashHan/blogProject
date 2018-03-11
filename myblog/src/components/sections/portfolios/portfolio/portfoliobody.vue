<template>
    <!-- Modal body -->
    <div class="container">
        <figure class="figure">
            <img :src="body.img" class="figure-img img-fluid rounded" alt="figure of this portfolio">
            <figcaption class="figure-caption text-right">
                <a :href="body.link">LINK</a>
            </figcaption>
        </figure>
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
  computed: {
      
  },
  components:{
  
  }
}
</script>
<style>

</style>
