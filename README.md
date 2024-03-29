

# Api CRUD
<h1>
<img src="https://raw.githubusercontent.com/leogottardi/api-crud/main/.github/Screenshot_1.png">
</h1>

# Indice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como utilizar](#-como-utilizar)
- [Como baixar o projeto](#-como-baixar-o-projeto)


## 📑 Sobre

O projeto é uma api que faz a técnica Create.Read.Update.Delete de estudantes.
Obs: Neste projeto não foi utilizado um banco de dados, os estudantes são salvos dentro de uma lista.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias :

- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/pt-br/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)

---
## 📓 Como utilizar
  Para utilizar a api você deve simular com [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).
  
 - Para cadastrar um estudante deve utilizar a url: http://localhost:4444/students
 - Para listar todos os estudantes cadastrados deve utilizar a url: http://localhost:4444/students
 - Para atualizar um estudante deve utilizar a url: http://localhost:4444/students/id-do-estudante
 - Para deletar um estudante deve utilizar a url: http://localhost:4444/students/id-do-estudante
  
  No parâmetro 'id-do-estudante' deve ser passado o id que consegue ser pego na url de listagem.
  
  Para cadastrar e atualizar um estudante deve ser passada uma estrutura [JSON](https://www.json.org/json-pt.html) no body, como demonstro abaixo:
  ```
  {
	"name":"Leonardo",
	"age": 21,
	"gender":"M"
  }
  ```
  
## 📦 Como baixar o projeto
```bash
    #Clonar o repositório
    $ git clone https://github.com/leogottardi/api-crud.git

    #Entrar no diretório
    $ cd api-crud

    #Instalar as dependencias

    $ npm install

    #Iniciar o projeto
    $ npm run dev
```
