// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');   // seu ./models/index.js
const apiRoutes = require('./routes');       // << hub de rotas

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Healthcheck simples pra testar rápido
app.get('/api/ping', (_req, res) => res.json({ ok: true }));

// Monta TODAS as rotas da API aqui
// Ex.: /api/orders, /api/products, /api/categories, etc.
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao sincronizar o Sequelize:', err);
    process.exit(1);
  });