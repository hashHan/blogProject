<template>
    <header class="container-fluid masthead bg-picture text-border text-white text-center">
        <div class=" text-white ">
            <img class="img-fluid mb-5 d-block mx-auto" src="#" alt="">
            <h1 class="text-uppercase mb-0">HAESEONG HAN</h1>
            <hr class="star-light">
            <h2 class="font-weight-light mb-0">Front-End Web Developer</h2>
        </div>
    </header>
</template>
<script>
export default {
  
}
</script>
<style>
.bg-picture {
    background: url(../assets/background/library-medium.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}


header.masthead {
  padding-top: 20rem;
  padding-bottom: 6rem;
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

@media (min-width: 992px) {
  header.masthead h1 {
    font-size: 4.75em;
    line-height: 4rem;
  }
  header.masthead h2 {
    font-size: 1.75em;
  }
}

hr.star-light,
hr.star-dark {
  max-width: 15rem;
  padding: 0;
  text-align: center;
  border: none;
  border-top: solid 0.25rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}


hr.star-light {
  border-color: #fff;
}

hr.star-light:after {
  color: #fff;
  background-color: #18BC9C;
}

hr.star-dark {
  border-color: #2C3E50;
}

hr.star-dark:after {
  color: #2C3E50;
  background-color: white;
}


</style>
