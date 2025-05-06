<template>
    <div id="main-Banner">
      <h1>Lanche Feliz!!</h1>
      <img src="../../public/img/lanche-Photoroom.png" alt="Overlay" class="overlay-image">
        
    </div>
    
</template>

<script>
export default {
    name:"Banner"
}
</script>

<style scoped>
    
    #main-Banner{
      background-image: url('../../public/img/5505524.jpg');
      background-position: 0 -250px;
      background-size: cover;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: flex-start ;
    }
    #main-Banner h1{

      color: #fff;
      text-align: center;
      font-size: 60px;
      background-color: #34495e;
      padding: 20px 40px;
      border-radius: 7px;
      background-image: linear-gradient(to bottom, rgba(8, 8, 8, 0.199), rgba(0, 0, 0, 0.808));

    }
    .overlay-image {
      position: relative;
      top: -30px;
      left: 200px;
      width: 40%; /* Ajuste o tamanho conforme necessário */
      height: auto;
    }

  
</style>