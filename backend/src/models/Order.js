// models/order.js
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customer_id',
        as: 'customer',
      });

      Order.hasMany(models.OrderItem, {
        foreignKey: 'order_id',
        as: 'orderItems',
      });
    }
  }

  Order.init({
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    cart_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    total_price: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0.00'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Order;
};