#!/usr/bin/env node
// Starts the DevRef static site and the Café Horizonte API together,
// so the React / Full Stack / TypeScript module previews show real
// data instead of an error state. Requires MongoDB running locally
// (mongodb://127.0.0.1:27017 by default) and Node + a Python
// interpreter available on PATH.
import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "projetos", "projeto-04-cafe-horizonte-api");

const STATIC_PORT = process.env.DEVREF_PORT ?? "5173";
const API_PORT = process.env.API_PORT ?? "3000";
const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/cafe_horizonte";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? `http://localhost:${STATIC_PORT}`;

function log(scope, message) {
  console.log(`[${scope}] ${message}`);
}

function findPython() {
  for (const candidate of ["python", "python3"]) {
    const check = spawnSync(candidate, ["--version"], { stdio: "ignore" });
    if (!check.error) return candidate;
  }
  return null;
}

function ensureApiReady() {
  const hasDeps = existsSync(path.join(apiDir, "node_modules"));
  if (hasDeps) return;

  log("api", "Primeira execução: instalando dependências (npm install)...");
  const install = spawnSync("npm", ["install"], { cwd: apiDir, stdio: "inherit", shell: true });
  if (install.status !== 0) {
    log("api", "Falha ao instalar dependências da API. Rode manualmente: cd projetos/projeto-04-cafe-horizonte-api && npm install");
    return;
  }

  log("api", "Populando o MongoDB com os itens de cardápio iniciais (npm run seed)...");
  const seed = spawnSync("npm", ["run", "seed"], {
    cwd: apiDir,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, MONGODB_URI },
  });
  if (seed.status !== 0) {
    log("api", "Não foi possível popular o banco agora. Confirme se o MongoDB está rodando e rode depois: cd projetos/projeto-04-cafe-horizonte-api && npm run seed");
  }
}

const children = [];

function stopAll(code) {
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  process.exit(code ?? 0);
}

process.on("SIGINT", () => stopAll(0));
process.on("SIGTERM", () => stopAll(0));

const python = findPython();
if (!python) {
  console.error("Python não encontrado no PATH. Instale Python ou sirva o site manualmente (veja o README).");
  process.exit(1);
}

ensureApiReady();

log("api", `Iniciando a API do Café Horizonte em http://localhost:${API_PORT} ...`);
const api = spawn("node", ["src/server.js"], {
  cwd: apiDir,
  stdio: "inherit",
  env: { ...process.env, PORT: API_PORT, MONGODB_URI, CLIENT_ORIGIN },
});
children.push(api);
api.on("exit", (code) => {
  if (code !== 0) {
    log(
      "api",
      `A API encerrou (código ${code}). Verifique se o MongoDB está rodando em ${MONGODB_URI}. ` +
        "Os módulos React, Full Stack e TypeScript mostrarão o estado de erro sem ela, mas o restante do site continua funcionando.",
    );
  }
});

log("site", `Servindo o DevRef em http://localhost:${STATIC_PORT} ...`);
const site = spawn(python, ["-m", "http.server", STATIC_PORT], {
  cwd: root,
  stdio: "inherit",
});
children.push(site);
site.on("exit", (code) => stopAll(code));
