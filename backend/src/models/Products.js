'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {}
  Product.init({
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    uniquePrice: DataTypes.STRING,
    sizes: DataTypes.JSON,
    stock_qty: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Ordem do produto dentro da categoria'
    },
  },
   {
    sequelize,
    modelName: 'Product',
    tableName: 'products', // Garante que o Sequelize use o nome correto da tabela
    timestamps: false // Desabilita o Sequelize de gerenciar created_at e updated_at
  });
  return Product;
};