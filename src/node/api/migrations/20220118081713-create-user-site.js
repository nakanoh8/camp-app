'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserSites', {
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
      site_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Sites', key: 'id'},
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      visit_at: {
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
    await queryInterface.dropTable('UserSites');
  }
};