<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/Pedidos">Pedidos</router-link>  
  </div>
    
</template>

<script>
export default {
    name: 'Navbar',
    props:["logo", "alt"]
   
}
</script>

<style scoped>
    #nav{
        background-color: #2c3e50;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-image: linear-gradient(to bottom, rgba(8, 8, 8, 0.199), rgba(0, 0, 0, 0.808));
        
        
    }
    #nav #logo-url{
        margin:auto;
        margin-left: 0;
    }
    #logo{
        width: 40px;
        height: 40px;
    }
    #nav a{
        color: #ecf0f1;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover{
        color:#1abc9c

    }

</style>
