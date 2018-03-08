<template>
    <footer ref="myfooterref" id="myfooter">
      <div class="container-fluid">
        <div class="row justify-content-md-left">
          <div id="contactinfo" class="col-md-4 mb-4 mb-lg-0">
            <h4 id="contact-title" class="text-uppercase contact-title mb-lg-5 mb-2">Contact Information</h4>
            <p class="font-weight-light contact-content mb-lg-3 mb-1">haeseong.han@gmail.com</p>
            <p class="font-weight-light contact-content mb-0">https://hashhan.github.io</p>
          </div>
          <div id="socialicon" class="col-md-4 mb-5 mb-lg-0">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#">                  
                    <i class="fab fa-linkedin fa-3x"></i>                 
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">                
                    <i class="fab fa-github fa-3x"></i>             
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container copyright py-4 text-center text-muted">
          <p>Copyright &copy; Haeseong Han</p>
    </div>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.contact-content{
  font-family: 'Passion One', sans-serif;
  color: #2b7755;
  font-size: 1.2em;
}
.contact-title{
  font-family: 'Teko', cursive;
  color: #42b983;
}
footer {
  padding: 50px 0 65px;
  background: linear-gradient(white, rgb(209, 208, 208)) ;
}

.list-inline {
    margin: 0;
    padding: 0;
}
.copyright {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
}
</style>
