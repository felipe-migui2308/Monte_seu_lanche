<template>
    <div>
   
      <Message :msg="msg" v-show="msg" />
      <div>
        
        <form action="" id="burger-form" @submit="createBurger">
          <div class="input-container">
            <label for="nome">Nome do Cliente:</label>
            <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
          </div>
          <div class="input-container">
            <label for="pao">Escolha um dos pães:</label>
            <select name="pao" id="pao" v-model="pao">
              <option value="">Selecione o pão</option>
              <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
            </select>
          </div>
          <div class="input-container">
            <label for="carne">Escolha o tipo de carne:</label>
            <select name="carne" id="carne" v-model="carne">
              <option value="">Selecione a carne</option>
              <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
            </select>
          </div>
          <div id="opcionais-container" class="input-container">
            <label id="opcionais-title" >Escolha os Adicionais:</label>
            <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
              <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
              <span>{{ opcional.tipo }}</span>
            </div>
          </div>
          <div class="input-container">
            <input type="submit" class="submit-btn" value="Criar meu Lanche!">
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import Message from './Message.vue';

  export default {
    components: { Message },
    name: 'BurgerForm',
    data() {
      return {
        paes: null,
        carnes: null,
        opcionaisdata: null,
        nome: null,
        pao: null,
        carne: null,
        opcionais: [],
        msg: null,
      };
    },
    methods: {
      async getIngredientes() {
          const req = await fetch("http://localhost:3000/ingredientes");
          const data = await req.json();
  
          console.log(data);
  
          this.paes = data.paes;
          this.carnes = data.carnes;
          this.opcionaisdata = data.opcionais;
      },
      async createBurger(e) {
        e.preventDefault();

        const data = {
            nome: this.nome,
            carne: this.carne,
            pao: this.pao,
            opcionais: this.opcionais,
            status: "Solicitado"
        }
        const dataJson = JSON.stringify(data)
        const req = await fetch("http://localhost:3000/burgers",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: dataJson
        });

        const res = await req.json();

        //colocar mensagem no sistema
        this.msg = `Pedido Nº ${res.id} realizado com sucesso!`;

        //limpar mensagem
        setTimeout(() => this.msg = "", 3000);

        // Limpar camapos
        this.nome ="";
        this.carne ="";
        this.pao="";
        this.opcionais=[];
        
      }
    },
    mounted() {
      this.getIngredientes();
    }
  };
  </script>
  
  <style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #34495e;
    padding: 5px 10px;
    border-left: 4px solid #1abc9c;
  }
  input, select {
    padding: 5px 10px;
    width: 300px;
  }
  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  #opcionais-title {
    width: 100%;
  }
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }
  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }
  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }
  .submit-btn {
    background-color: #2c3e50;
    color: #1abc9c;
    font-weight: bold;
    border: 2px solid #2c3e50;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    
  }
  .submit-btn:hover {
    background-color: transparent;
    color: #2c3e50;
  }
  </style>
  