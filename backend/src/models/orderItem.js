'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'order_id',
        as: 'order',
      });
      OrderItem.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
    }
  }

  OrderItem.init({
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
      size: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    quantity: {  // ✅ aqui foi corrigido
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    unit_price_cents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total_cents: {  // ✅ aqui acessa 'quantity'
      type: DataTypes.VIRTUAL,
      get() {
        const quantity = this.getDataValue('quantity');
        const unit = this.getDataValue('unit_price_cents');
        return quantity && unit ? quantity * unit : 0;
      }
    },
  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'order_items',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return OrderItem;
};