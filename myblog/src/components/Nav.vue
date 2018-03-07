<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <router-link to="/" tag="li" class="nav-item"><a class="nav-link">Home</a></router-link>
          <router-link to="#" tag="li" class="nav-item"><a class="nav-link">CV</a></router-link>
          <router-link to="/portfolios" tag="li" class="nav-item"><a class="nav-link">PORTFOLIO</a></router-link>
          <router-link to="/posts" tag="li" class="nav-item"><a class="nav-link">POST</a></router-link>
          <router-link to="#" tag="li" class="nav-item"><a class="nav-link">CONTACT</a></router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style>
#nav{
  
}
</style>
