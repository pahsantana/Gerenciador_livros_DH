module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      name:{
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      synopsis:{
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'updated_at'
      },
      status:{
        type: Sequelize.BOOLEAN
      }
    });

    return Book;
};