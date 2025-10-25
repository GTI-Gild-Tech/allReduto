'use strict';
const { Model, DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    id: false
  });
  
  Category.beforeCreate(async (category) => {
    if (!category.slug) {
      category.slug = nanoid(10);
    }
  });

  return Category;
};
