module.exports = (sequelize, Sequelize) => {
    const Tenant = sequelize.define("tenant", {
      name:{
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.BOOLEAN
      }
    });

    return Tenant;
};