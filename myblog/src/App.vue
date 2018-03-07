<template>
  <div id="app">
    app[NAV, MAIN]<br>
    from app: <app-nav></app-nav>
    <br><hr><br>
    from app: <div><router-view></router-view></div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';//neccessary for routing

export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  components:{
    appNav: Nav,
    appMain: Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
