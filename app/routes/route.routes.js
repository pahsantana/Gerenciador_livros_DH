module.exports = app =>{
    const books = require("../controllers/book.controller");
    const tenants = require("../controllers/tenant.controller");

    var router = require("express").Router();

    // Criar novo livro
    router.post("/books",books.create);
    // Retorna todos os livros
    router.get('/books',books.findAll);
    // Retorna os livros de um autor específico
    router.get("/books/:author",books.findByAuthor);
    //Atualiza status do livro 
    router.put("/books/:id", books.update);

    // Criar novo locatário
    router.post("/tenants",tenants.create);
    // Retorna todos os locatários
    router.get('/tenants',tenants.findAll);
    // Deletar os locatários pelo id
    router.delete('/tenants/:id',tenants.delete);
    // Deletar todos os locatários
    router.delete('/tenants',tenants.deleteAll);

    app.use('/api/',router);
}
