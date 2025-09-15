'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // ajuste o nome da tabela se o seu for diferente de 'products'
    await queryInterface.addColumn('products', 'imageUrl', {
      type: Sequelize.STRING,
      allowNull: true,
      // se quiser posicionar a coluna:
      // after: 'description', // MySQL/MariaDB
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('products', 'imageUrl');
  },
};