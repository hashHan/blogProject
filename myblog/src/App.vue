<template>
  <div id="app" class="container-fluid"> 
    <app-header></app-header>
    <app-nav></app-nav>
    <br>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';//neccessary for routing
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  components:{
    appNav: Nav,
    appMain: Main,
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style lang="scss">


.text-border{
    text-shadow:
    -1px -1px 0 #202020,
    1px -1px 0 #202020,
    -1px 1px 0 #202020,
    2px 2px 0 #202020
}

body{
  background-color:#ffffff;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: 0px;
  margin-left: 0px;
  
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: 0px;
  margin-left: 0px;
  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}

</style>
