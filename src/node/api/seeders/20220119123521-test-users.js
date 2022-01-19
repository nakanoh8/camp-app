'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { name: 'hayato',  email: 'hayato@example.com', password: 'password', created_at: now, updated_at: now},
      { name: 'sae',  email: 'sae@example.com', password: 'password', created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
