![Logo](https://i.ibb.co/QCdfZtg/Cormorant.jpg)
<br><br>
# Hotel - API Rest

## Projeto módulo 4 - Resilia Educação

### *Grupo 01*

<br>
<br>
Projeto de criação de uma API REST contendo todas as operações de CRUD de uma rede de hotéis com consulta ao banco de dados retornando dados dos clientes.
<br>
<br>

## Início
Aqui vamos te ensinar o passo a passo para a execução da nossa API REST, primeiramente você deve ter instalado em sua máquina o Node.js, caso você não possua o Node.js você pode fazer o download aqui de acordo com o seu sistema operacional --> https://nodejs.org/en/download/

Após a instalação do Node.js você pode testar se ele está devidamente instalado abrindo o terminal do seu sistema operacional e digitando na sua linha de comando > ``` node -v ``` e aparecerá a versão do Node.js instalada em sua máquina.
<br><br>
Exemplo Node.js :
<br><br>
![Node](https://i.ibb.co/RQkG1fM/CMD-Node.jpg)

No segundo passo vamos clonar este repositório e você precisará ter instalado em sua máquina o GIT, caso não tenha também basta efetuar o download através desse link --> https://git-scm.com/d

Após o download é só criar uma pasta em seu computador com nome e local que preferir, entrar na pasta, clicar com o botão direito do mouse no espaço vazio e ir na opção ``` "Git Bash Here" ```

Agora é só dar o comando ``` git clone ``` https://github.com/Sergiomms/m4-projeto-hotel-clientes-api
<br>
<br>

## Executando a aplicação

Ao terminar de fazer todo o download dos aqruivos abra a pasta em seu VS Code (ou IDE de preferencia), abra um novo terminal em seu VS Code e digite o comando:

```sh
  $ npm install
  ```
<br>
<br>

## Criando o banco de dados

Ainda no VS Code, vá até a pasta infra e abra o arquivo **create.js**

Em seguida rode o código clicando no "play" no canto seperior direito do seu VS Code (isso servirá para criar o banco de dados) e depois faça o mesmo para o arquivo **sqlite-db.js**

Por fim rode o arquivo **populate.js** seguindo as mesmas instruções para inserir dados em seu banco de dados
<br>
<br>

## Iniciando o servidor

No terminal de seu VS Code digite o seguinte comando:

```sh
 npm run dev 
 ```

E pronto, o servidor já estará online
<br>
<br>

## Rotas para usar em seu API Client (Postman, Insomnia)

GET - Mostrar todos
```
GET http://localhost:3089/clientes
```

GET - Encontrar por id (No lugar de id, colocar o numero de fato na URL)
```
GET http://localhost:3089/clientes/id
```

POST - Inserir informações em formato JSON na seguinte sequencia:

* nome;
* email;
* cpf e 
* quarto.

```
POST http://localhost:3089/clientes
```

DELETE - Deletar um cliente pelo id
```
DELETE http://localhost:3089/clientes/id
```
PUT - Atualizar dados do cliente pelo id;<br>
Insira os dados que deseja alterar, podem ser todos ou apenas um com exceção do id:
```
PUT http://localhost:3089/clientes/id
```
<br>

## Bibliotecas Utilizadas

* Express (Para criar o servidor)
* Sqlite3 (Banco de dados)
* Cors

## Bibliotecas utilizadas na parte de DEV

* Nodemon (Atualização de servidor)







