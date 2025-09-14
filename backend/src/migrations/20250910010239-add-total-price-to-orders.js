// migrations/XXXXXXXXXXXXXX-add-quantity-to-order-items.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('order_items', 'quantity', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('order_items', 'quantity');
  },
};