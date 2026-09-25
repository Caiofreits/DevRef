# Café Horizonte — API (cópia para a apostila 05)

API própria (Node.js + Express + MongoDB/Mongoose) para o cardápio e as reservas do Café Horizonte, construída seguindo o projeto guiado da apostila 04. Esta pasta é uma cópia idêntica de `projeto-04-cafe-horizonte-api`, mantida aqui para que `projeto-05-cafe-horizonte-ts` seja autocontido — o front-end em `../web` (migrado para TypeScript na apostila 05) depende dela. O código permanece em JavaScript: a apostila 05 migra o front-end React, não este backend Express/Mongoose. Usa um banco isolado (`cafe_horizonte_ts`) para não compartilhar dados com a versão original em `../../projeto-04-cafe-horizonte-api`.

## Pré-requisitos

- Node.js 20.6+ (usa `--env-file` e `--watch` nativos; testado com Node 24.19.0).
- MongoDB rodando localmente na porta padrão (27017). Testado com MongoDB Community Server 8.3, instalado como serviço do Windows (inicia automaticamente).

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste se necessário:

| Variável | Finalidade |
| --- | --- |
| `PORT` | Porta HTTP da API (padrão 3000). |
| `MONGODB_URI` | String de conexão do MongoDB. Nunca é enviada ao navegador. |
| `CLIENT_ORIGIN` | Origem permitida pelo CORS (o front-end React, ex.: `http://localhost:5173`). |

## Instalação

```bash
npm install
npm run seed   # popula o banco com os 5 itens do cardápio e copia as imagens para uploads/
npm run dev    # inicia com reinício automático (node --watch)
```

Abra `http://localhost:3000/health` para confirmar que o processo subiu. O servidor só aceita requisições depois de conectar ao MongoDB.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia a API com `--watch` (reinicia ao salvar arquivos). |
| `npm start` | Inicia a API sem watch (uso em produção/teste). |
| `npm run seed` | Limpa a coleção `menuitems` e recria os 5 itens de exemplo, copiando as imagens de `../web/public/img`. |

## Estrutura

```
src/
  app.js            Montagem do Express: CORS, JSON, log, rotas, estáticos, erros
  server.js         Conecta ao banco e sobe o servidor HTTP
  database.js       Conexão com o MongoDB via Mongoose
  models/           MenuItem e Reservation (schemas Mongoose)
  controllers/      Regras de cada operação (CRUD)
  routes/           Roteamento Express por recurso
  middleware/       Validação de corpo e tratamento centralizado de erros
  upload.js         Configuração do multer (upload de imagem) e normalização do corpo multipart
uploads/            Arquivos de imagem enviados (servidos em /uploads)
scripts/seed.js     Popula o banco com dados de exemplo
```

## Endpoints

| Endpoint | Corpo | Resposta de sucesso |
| --- | --- | --- |
| `GET /health` | nenhum | `200` `{ status: "ok" }` |
| `GET /api/menu-items` | nenhum | `200` com `{ data: [] }` |
| `POST /api/menu-items` | `multipart/form-data`: nome, categoria, preço e imagem opcional (`image`) | `201` com item criado |
| `PATCH /api/menu-items/:id` | campos permitidos (`name`, `description`, `category`, `price`, `available`) | `200` com item atualizado |
| `DELETE /api/menu-items/:id` | nenhum | `204` (remove também a imagem associada) |
| `POST /api/reservations` | nome, e-mail, data, horário e pessoas (JSON) | `201` com reserva criada |
| `GET /api/reservations/:id` | nenhum | `200` com reserva ou `404` |
| `DELETE /api/reservations/:id` | nenhum | `204` |

Erros seguem sempre o formato `{ error: { code, message, details? } }`. Códigos usados: `VALIDATION_ERROR` (400, com `details` por campo), `INVALID_ID` (400, id malformado), `INVALID_JSON` (400, corpo da requisição não é JSON válido), `EMPTY_UPDATE` (400), `NOT_FOUND` (404), `ROUTE_NOT_FOUND` (404), `INTERNAL_ERROR` (500).

## Regras de negócio validadas no servidor

- Nome com ao menos 3 caracteres, e-mail com "@", categoria em `bebidas`/`doces`/`salgados`, preço numérico ≥ 0.
- Reserva: data futura, fechado às segundas-feiras, horário entre 08:00 e 18:00 no formato `HH:MM`, 1 a 12 pessoas.
- Upload de imagem: apenas `.jpg`, `.jpeg`, `.png`, `.webp` (extensão e MIME), limite de 5 MB. Um arquivo enviado é removido do disco automaticamente se a validação ou a gravação no banco falhar (evita arquivos órfãos), e a imagem de um item é removida ao excluí-lo.

## Limitações conhecidas

- Não há autenticação/autorização: qualquer cliente pode criar, alterar ou remover itens do cardápio e reservas. Adequado apenas para estudo local.
- Validação de upload é só por extensão e MIME declarado pelo navegador — não inspeciona a assinatura real do arquivo. Insuficiente para produção.
- Sem testes automatizados, rate limiting ou observabilidade (logs estruturados, métricas).
- `CLIENT_ORIGIN` aceita apenas uma origem; múltiplos ambientes exigiriam uma lista de origens permitidas.
