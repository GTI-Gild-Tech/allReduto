import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import modelsPkg from "./models/index.js";
const { sequelize } = modelsPkg.default ?? modelsPkg;

import apiRoutes from "./routes/index.js";

// __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json({ limit: "20mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));

// Arquivos públicos
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Healthcheck simples
app.get("/api/ping", (_req, res) => res.json({ ok: true }));

// ===== DIAGNÓSTICOS (registados ANTES do router /api) =====
app.get("/__hello", (_req, res) => res.json({ ok: true, msg: "hello" }));

app.get("/api/__appstack", (_req, res) => {
  const stack = app._router.stack.map((l) => ({
    name: l.name,
    path: l.route?.path || l.regexp?.toString(),
    methods: l.route?.methods || null,
  }));
  res.json(stack);
});
// ==========================================================

// Monta as rotas principais
app.use("/api", apiRoutes);

const PORT = Number(process.env.APP_PORT || process.env.PORT || 3001);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log("testando VPS 03/07/2026");
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao sincronizar o Sequelize:", err);
    process.exit(1);
  });