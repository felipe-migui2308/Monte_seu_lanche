
# 🍔 Monte Seu Lanche

**Monte Seu Lanche** é uma aplicação web desenvolvida com Vue.js que permite aos usuários personalizar seus pedidos em uma lanchonete de forma interativa e intuitiva. Este projeto simula o processo de montagem de lanches, oferecendo uma experiência prática de consumo de APIs locais com `json-server`.

---

## 🚀 Funcionalidades

- Interface interativa para seleção de ingredientes e montagem de lanches.
- Integração com uma API REST simulada utilizando `json-server`.
- Visualização em tempo real do pedido montado.
- Feedback visual para ações do usuário.

---

## 🧰 Tecnologias Utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [json-server](https://github.com/typicode/json-server)
- HTML5 & CSS3
- JavaScript (ES6+)

---

## 📦 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/felipe-migui2308/Monte_seu_lanche.git
   cd Monte_seu_lanche
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor da API (json-server):**

   Certifique-se de que o `json-server` esteja instalado globalmente. Caso não esteja, instale com:

   ```bash
   npm install -g json-server
   ```

   Em seguida, inicie o servidor:

   ```bash
   npm run backend
   ```

4. **Inicie a aplicação Vue:**

   Em outro terminal, execute:

   ```bash
   npm run serve
   ```

   A aplicação estará disponível em: `http://localhost:8082`

---

## 📁 Estrutura do Projeto

```
Monte_seu_lanche/
├── db/
│   └── db.json           # Banco de dados simulado para json-server
├── public/
│   └── index.html        # Arquivo HTML principal
├── src/
│   ├── assets/           # Arquivos estáticos (imagens, estilos)
│   ├── components/       # Componentes Vue reutilizáveis
│   ├── views/            # Páginas da aplicação
│   ├── App.vue           # Componente raiz
│   └── main.js           # Ponto de entrada da aplicação
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## 📸 Demonstração

![alt text](<Captura de tela 2025-05-05 220414.png>)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

- **Luiz Felipe Miguel Custódio**
  - GitHub: [@felipe-migui2308](https://github.com/felipe-migui2308)
