<template>
    <header class="container-fluid masthead bg-picture text-border text-white text-center">
        <div class="container text-container">
          <div class="text-container2">
            <img class="img-fluid mb-5 d-block mx-auto" src="#" alt="">
            <h1 class="text-uppercase mb-0 d-none d-sm-block">HAESEONG HAN</h1>
            <hr class="star-light">
            <ul id="headericons" class="list-inline text-center">
              <li class="list-inline-item">                
                    <i class="fab fa-js fa-3x"></i>             
              </li>
              <li class="list-inline-item">                
                    <i class="fab fa-python fa-3x"></i>             
              </li>
              <li class="list-inline-item">                               
                    <i class="fab fa-vuejs fa-3x"></i>    
              </li>
              <li class="list-inline-item">                
                    <i class="fab fa-git-square fa-3x"></i>             
              </li>   
            </ul>
            <h2 class="mb-0">Front-End Web Developer</h2>
          </div>
        </div>
    </header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
$xxssize: 500px;
$xssize: 576px;
$smsize: 768px;
$mdsize: 992px;
$lgsize: 1200px;
$override-color : rgb(17, 236, 17);

#headericons{
  color: $override-color;
}
.bg-picture {
    background: url(../assets/background/library-medium.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media screen and (max-width: $lgsize){
      background: url(../assets/background/libraryw1200lg.jpg) no-repeat center center fixed; 
    }
    @media screen and (max-width: $mdsize){
      background: url(../assets/background/libraryw992md.jpg) no-repeat center center fixed; 
    }
    @media screen and (max-width: $smsize){
      background: url(../assets/background/libraryw768sm.jpg) no-repeat center center fixed; 
    }
    @media screen and (max-width: $xssize){
      background: url(../assets/background/libraryw576xs.jpg) no-repeat center center fixed; 
    }
}


header.masthead {
  padding-top: 20rem;
  padding-bottom: 6rem;
  @media screen and (max-width: $xxssize){
      padding-top: 4rem;
      padding-bottom: 3rem;
  }
  @media screen and (min-width: $xxssize) and (max-width: $smsize){
      padding-top: 8rem;
      padding-bottom: 3rem;
  }
  @media screen and (min-width: $smsize) and (max-width: $mdsize){
      padding-top: 12rem;
      padding-bottom: 4rem;
  }
    @media screen and (min-width: $mdsize) and (max-width: $lgsize){
      padding-top: 17rem;
      padding-bottom: 5rem;
  }
  padding-right: 0px;
  padding-left: 0px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 50px;
  border-right: 0px;
  border-left: 0px;
  background-attachment: scroll;
  position: relative;
}

header.masthead h1 {
  font-size: 3rem;
  line-height: 3rem;
}

header.masthead h2 {
  font-size: 1.3rem;
  font-family: 'Lato';
}

@media screen and (min-width: $mdsize) {
  header.masthead h1 {
    font-size: 4.75em;
    line-height: 4rem;
  }
  header.masthead h2 {
    font-size: 1.75em;
  }
}

hr.star-light {
  max-width: 15rem;
  padding: 0;
  text-align: center;
  border: none;
  border-top: solid 0.25rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border-color: #fff;
}




</style>
