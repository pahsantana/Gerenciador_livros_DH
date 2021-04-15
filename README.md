# Gerenciador_livros_DH
Desafio da Digital House para DecolaDev de criar um sistema de gerenciador de livros 

- Cadastrar Livros 
- Exibir Livros 
- Buscar livros por autor
- Status livro - Disponível, mudar para Indisponível(manualmente) se alugado 
- Cadastrar locatário
- Exibir cadastros ativos 
- Apagar cadastros 
--------------------------------------------------------
## Dados Livros - ModeI Sequelize 

- Nome
- Autor
- Sinopse
- Data de Lançamento
- Data de Aluguel
- Status 

---------------------------------------------------------
## Dados Locatário - Model Sequelize
- Nome
- CPF
- Status Cadastro - ativo ou inativo

---------------------------------------------------------
### MUST HAVE 

- Persistência de dados
- Rotas separadas
- Tratamento de erro
- API apenas

---------------------------------------------------------
### Comandos usados : 
- npm init -y 
- git init -y 
- npm install sequelize mysql2 express uuid
- npm install nodemon -D
