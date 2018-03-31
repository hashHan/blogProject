<template>
    <nav id="mainNav" class="navbar navbar-expand-lg fixed-top text-uppercase text-white text-border">
      <div class="container-fluid">
        <a class="navbar-brand js-scroll-trigger" href="/"
           style="padding-left:5px;">HAESEONG HAN</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase rounded  text-white text-border" 
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                aria-expanded="false" aria-label="Toggle navigation">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <span class="d-none d-sm-block">Menu</span>
            </li>
            <li class="list-inline-item d-block d-sm-none">
              <i class="fas fa-bars fa-1x"></i>
            </li>
          </ul>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">Home</a></router-link>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a target="_blank" :href="CVurl" class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">CV</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/PortfolioGrid" @click.native="scroll">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">PORTFOLIO</a></router-link>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/posts" @click.native="scroll">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">POST</a></router-link>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><router-link :to="contactlink">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">CONTACT</a></router-link>
              </li>
              <li v-if="!auth" class="nav-item mx-0 mx-lg-1"><router-link to="/signup" @click.native="scroll">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">SIGNUP</a></router-link>
              </li>
              <li v-if="!auth" class="nav-item mx-0 mx-lg-1"><router-link to="/signin" @click.native="scroll">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">SIGNIN</a></router-link>
              </li>
              <li v-if="auth" class="nav-item mx-0 mx-lg-1"><router-link to="/admin" @click.native="scroll">
                <a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">ADMIN</a></router-link>
              </li>
              <li v-if="auth" class="nav-item mx-0 mx-lg-1">
                <a @click="onLogout" class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">LOGOUT</a>
              </li>
          
          </ul>
        </div>
      </div>
    </nav>

</template>
<script>
export default {
  data(){
    return{
        CVurl: "https://cvhaeseong.firebaseapp.com/",
        //portfoliohash: { name: 'portfolio', hash: '#portfolio-modal'},
        //posthash:  { name: 'posts', hash: '#postmain'}
    }
  },
  computed: {
    contactlink() {//this solves the problem that an event is not occured in the same hashtag state;
        if(this.$route.hash=='#contactinfo'){
            return { name: 'home', hash: '#socialicon'};
        }else{
          return { name: 'home', hash: '#contactinfo'};
        }
    },
    auth () {
        return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    scroll() {
        window.scrollTo(0,1000);
    },
    onLogout() {
      this.$store.dispatch('logout');
    }
  }
}

</script>
<style lang="scss">
$xxssize: 500px;
$xssize: 576px;
$smsize: 768px;
$mdsize: 992px;
$mmdsize: calc($mdsize - 1px);
$lgsize: 1200px;
$navback-color : rgba(0, 0, 0, 0.4);

@media screen and (max-width: $mdsize){
    #navbarResponsive{
      .navbar-nav{
        background-color: $navback-color;
        padding-bottom: 50px;
        text-shadow:
            0px 0px 0 #202020,
            0px 0px 0 #202020,
            0px 0px 0 #202020,
            0px 0px 0 #202020; 
      } 
    } 
}
@media screen and (min-width: $mdsize ) and (max-width: $lgsize){
  .navbar-nav{
    font-size: 0.9em;
  }
}
#mainNav {
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  background: transparent;
  .navbar-brand {
    color: #fff;
  }
  .navbar-nav {
    letter-spacing: 0.0625rem;
    li.nav-item a.nav-link {
      color: #fff;
      &:hover {
        color: #18BC9C;
      }
      &:active, &:focus{
        color: #fff;
      }
      .active{
        color: #18BC9C;
      }
    }
  }
}


@media (min-width: $mdsize) {
  #mainNav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;
    .navbar-brand {
      font-size: 2em;
      -webkit-transition: font-size 0.3s;
      -moz-transition: font-size 0.3s;
      transition: font-size 0.3s;
    }
    .navbar-nav {
      > li.nav-item > a.nav-link.active {
        color: #fff;
        background: #18BC9C;
        &:active, &:focus, &:hover{
          color: #fff;
          background: #18BC9C;
        }
      }
    }
    .navbar-shrink .navbar-brand {
      font-size: 1.5em;
    }
  }
}

@media (max-width: 300px) {
  #mainNav .navbar-brand {
  font-size: 1em;
  -webkit-transition: font-size 0.3s;
  -moz-transition: font-size 0.3s;
  transition: font-size 0.3s;
  }
}
</style>
