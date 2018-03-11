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
              <router-link to="/" tag="li" class="nav-item mx-0 mx-lg-1"><a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">Home</a></router-link>
              <li class="nav-item mx-0 mx-lg-1"><a :href="CVurl" class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">CV</a></li>
              <router-link to="/PortfolioGrid" @click.native="scroll" tag="li" class="nav-item mx-0 mx-lg-1"><a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">PORTFOLIO</a></router-link>
              <router-link to="/posts" @click.native="scroll" tag="li" class="nav-item mx-0 mx-lg-1"><a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">POST</a></router-link>
              <router-link :to="contactlink" tag="li" class="nav-item mx-0 mx-lg-1"><a class="nav-link py-1 px-0 px-lg-3 rounded js-scroll-trigger">CONTACT</a></router-link>
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
      }
  },
  methods: {
    scroll() {
        window.scrollTo(0,1000);
    }
  }
}

</script>
<style lang="scss">
$smallsize: 500px;
$navback-color : rgba(0, 0, 0, 0.4);

@media screen and (max-width: $smallsize){
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


#mainNav {
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  background: transparent;
  
}

#mainNav .navbar-brand {
  color: #fff;
}

#mainNav .navbar-nav {
  letter-spacing: 0.0625rem;
}

#mainNav .navbar-nav li.nav-item a.nav-link {
  color: #fff;
}

#mainNav .navbar-nav li.nav-item a.nav-link:hover {
  color: #18BC9C;
}

#mainNav .navbar-nav li.nav-item a.nav-link:active, #mainNav .navbar-nav li.nav-item a.nav-link:focus {
  color: #fff;
}

#mainNav .navbar-nav li.nav-item a.nav-link.active {
  color: #18BC9C;
}



@media (min-width: 992px) {
  #mainNav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;
  }
  #mainNav .navbar-brand {
    font-size: 2em;
    -webkit-transition: font-size 0.3s;
    -moz-transition: font-size 0.3s;
    transition: font-size 0.3s;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link.active {
    color: #fff;
    background: #18BC9C;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
    color: #fff;
    background: #18BC9C;
  }
  #mainNav.navbar-shrink .navbar-brand {
    font-size: 1.5em;
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
