'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'order', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Ordem do produto dentro da categoria'
    });

    // Adicionar índice composto para otimizar consultas por categoria e ordem
    await queryInterface.addIndex('products', ['category', 'order'], {
      name: 'idx_products_category_order'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('products', 'idx_products_category_order');
    await queryInterface.removeColumn('products', 'order');
  }
};
