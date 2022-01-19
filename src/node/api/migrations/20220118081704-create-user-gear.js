'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserGears', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'},
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      gear_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Gears', key: 'id'},
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      purchase_at: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserGears');
  }
};