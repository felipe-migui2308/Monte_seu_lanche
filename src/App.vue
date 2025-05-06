<template >
  <div class="Fundo_container" >
    <div>
      <Navbar :logo="logo_src" :alt="app_name" />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Footer from './components/Footer.vue'


export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Monte seu Hamburguer!",


    }
  }
}
</script>

<style>
  * {
    font-family: helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  
  .main-container{
    margin: 50px;
    min-height: 250px;
  }
  h1{
    text-align:center ;
    font-size: 40px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
