// src/models/index.js (CommonJS)
require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");

// Lê configs do .env
const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_PORT = Number(process.env.DB_PORT || 3306);
const DB_USER = process.env.DB_USER || "root";

// ✅ aceita DB_PASSWORD (recomendado) e também DB_PASS (legado)
const DB_PASS =
  process.env.DB_PASSWORD ??
  process.env.DB_PASS ??
  "";

const DB_NAME = process.env.DB_NAME || "cafeteria";
const DB_DIALECT = process.env.DB_DIALECT || "mysql";

// Logs úteis (não imprime a senha)
console.log("[db] config =>", {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  db: DB_NAME,
  dialect: DB_DIALECT,
  passSet: DB_PASS.length > 0,
});

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false,
});

const db = {};

// Registra instâncias dos models
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require("./Products")(sequelize, DataTypes);
db.Category = require("./Category")(sequelize, DataTypes);
db.Order = require("./Order")(sequelize, DataTypes);
db.OrderItem = require("./orderItem")(sequelize, DataTypes);
db.Customer = require("./Customer")(sequelize, DataTypes);
db.Cart = require("./Cart")(sequelize, DataTypes);
db.User = require("./user")(sequelize, DataTypes);

// Chama static associate de cada model (se existir)
Object.keys(db).forEach((modelName) => {
  if (db[modelName] && typeof db[modelName].associate === "function") {
    db[modelName].associate(db);
  }
});

module.exports = db;