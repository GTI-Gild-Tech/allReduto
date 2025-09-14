'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Customer, {
        foreignKey: 'customer_id',
        as: 'customer'
      });
      Cart.hasMany(models.CartItem, {
        foreignKey: 'cart_id',
        as: 'cartItems'
      });
      Cart.hasOne(models.Order, {
        foreignKey: 'cart_id',
        as: 'order'
      });
    }
  }
  Cart.init({
    cart_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('active', 'abandoned', 'converted'),
      defaultValue: 'active',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Cart;
};
