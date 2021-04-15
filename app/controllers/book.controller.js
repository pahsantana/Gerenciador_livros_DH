const db = require("../models");

Book = db.books;

const Sequelize = require('sequelize');
const Op = db.sequelize.Op; // redução de código

exports.create = (req,res)=>{
    //Validate Request
    if(!req.body.name){
        res.status(400).send({
            message: "Nome do livro não pode ser vazio!",
        })
        return;
    }
    if(!req.body.author){
        res.status(400).send({
            message: "Autor não pode ser vazio!",
        })
        return;
        }
        if(!req.body.status){
            res.status(400).send({
                message: "Status do livro não pode ser vazio!",
            })
            return;
        }

    // Create book
    const book = {
        name: req.body.name,
        author: req.body.author,
        synopsis:req.body.synopsis,
        createdAt:req.body.createdAt,
        updatedAt:req.body.createAt,
        status: req.body.status ? req.body.status : false,
    };
    Book.create(book)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Erro interno ao criar o livro",
        });
    });
};
  
exports.findAll = (req,res) => {
  Book.findAll()
  .then((data)=>{
      res.send(data);
  })
  .catch((err)=>{
      res.status(500).send({
          message:
          err.message || "Erro interno ao buscar os livros"
      });
  });
};

exports.findByAuthor = (req,res) =>{
    Book.findAll({
      where: {
        author:{
          [Sequelize.Op.like]: `%${req.params.author}%` 
        }
      }
    })
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar o livro por autor"
        });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(
    {status: req.body.status},
    {where: {id : id}}
  )
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Livro atualizado"
      });
    } else {
      res.send({
        message: `Não foi possível atulizar o livro de id: ${id}, livro não encontrado ou body vazio`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Erro interno ao atualizar o livro de id: ${id}`
    })
  })
}

  


  
