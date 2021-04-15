const db = require("../models");

Tenant = db.tenants;

const Op = db.sequelize.Op; // redução de código

exports.create = (req,res)=>{
  //Validate Request
  if(!req.body.name){
      res.status(400).send({
          message: "Nome do locatário não pode ser vazio!",
      })
      return;
  }

  // Create Tenant
    const tenant = {
      name: req.body.name,
      cpf: req.body.cpf,
      status: req.body.status ? req.body.status : false,
    };
    Tenant.create(tenant)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Erro interno ao criar o locatário",
        });
    });
};

exports.findAll = (req,res) => {
  Tenant.findAll()
  .then((data)=>{
      res.send(data);
  })
  .catch((err)=>{
      res.status(500).send({
          message:
          err.message || "Erro interno ao buscar os locatários"
      });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tenant.destroy({where: {id : id}})
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Locatário apagado com sucesso"
      });
    } else {
      res.send({
        message: `Não foi possível apagar o locatário de id: ${id}, locatário não encontrado ou body vazio`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Erro interno ao apagar o locatário de id: ${id}`
    })
  })
}

exports.deleteAll = (req, res) => {
  const id = req.params.id;

  Tenant.destroy({where: {},
  truncate:false})
  .then(nums=>{
    res.send({message: `${nums} locatários deletados com sucesso`});
  })
  .catch(err=>{
    res.status(500).send({
      message:
      err.message || "Erro ao deletar todos os locatários"
    });
  });
};
  
  
  
  