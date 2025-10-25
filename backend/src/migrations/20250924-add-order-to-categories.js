'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Migration vazia - mantida para compatibilidade
    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.resolve();
  }
};
