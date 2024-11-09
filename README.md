


### Jolifox - Notion API

### Desenvolvido por Ewerton Diniz

Email para contato: [epd.diniz@gmail.com]

---

### **Visão Geral**

Este projeto permite a integração com a Notion API, possibilitando a criação, 
atualização, consulta e arquivamento de páginas em um banco de dados do Notion.

---

### **Pré-requisitos**

Antes de rodar a aplicação, você precisa ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

---

### **Passos para Executar a Aplicação**

1. **Clone o repositório**:

   Se ainda não fez isso, clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/cc-dev-ediniz/notion-api.git
   ```

2. **Instale as dependências**:

   Navegue até o diretório do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   Após a instalação das dependências, você tem duas opções para rodar a aplicação:

   - Para iniciar a aplicação no modo normal:

     ```bash
     npm start
     ```

   - Para iniciar a aplicação no modo **DEV** com `nodemon` (automaticamente reinicia a aplicação em alterações):

     ```bash
     npm run dev
     ```

4. **Verifique o arquivo `.env`**:

   As credenciais necessárias para a integração com a Notion API já estão preenchidas no arquivo `.env`. Caso precise alterar algo, edite o arquivo conforme necessário.

5. **Teste a API com o Postman**:

   Na pasta `postman`, você encontrará uma collection do Postman. Importe este arquivo no Postman para testar as rotas da aplicação.

---

### **Rotas Disponíveis**

- **POST /api/notion/page/**: Cria uma nova página no Notion.
- **GET /api/notion/page/:id**: Recupera uma página existente do Notion a partir do UUID.
- **PUT /api/notion/page/:id**: Atualiza as propriedades de uma página existente a partir do UUID.
- **DELETE /api/notion/page/:id**: Arquiva uma página existente no Notion a partir do UUID.

---

### **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).

---
 
