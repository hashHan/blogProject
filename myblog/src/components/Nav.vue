<template>
  <div id="nav">
    <ul class="nav flex-column">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="#" tag="li" active-class=""><a>CV</a></router-link>
        <router-link to="/portfolios" tag="li" active-class=""><a>PORTFOLIO</a></router-link>
        <router-link to="/posts" tag="li" active-class=""><a>POST</a></router-link>
        <router-link to="#" tag="li" active-class=""><a>CONTACT</a></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#nav{
  
}
</style>
