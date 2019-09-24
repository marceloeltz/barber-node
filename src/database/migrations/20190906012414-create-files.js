
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('files', {
    id: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    path: {
      type: Sequelize.STRING,
      allowNUll: false,
      unique: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNUll: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNUll: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('files'),
};
