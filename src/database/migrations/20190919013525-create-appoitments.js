
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('appointments', {
    id: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNUll: true,
    },
    provider_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNUll: true,
    },
    canceled_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('appointments'),
};
