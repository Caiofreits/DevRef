# Café Horizonte — versão React

Reconstrução do projeto Café Horizonte (originalmente em HTML/CSS/JS puro) usando React + Vite, seguindo o projeto guiado da apostila 03. Desde a apostila 04, o cardápio e as reservas são servidos por uma API própria — veja `../projeto-04-cafe-horizonte-api`.

## Pré-requisitos

- Node.js 18 ou superior (testado com Node 24.19.0 / npm 11.17.0).
- A API `cafe-horizonte-api` rodando (por padrão em `http://localhost:3000`) — sem ela, o cardápio, as sugestões do dia e o formulário de reservas não funcionam.

## Instalação

```bash
npm install
cp .env.example .env   # ajuste VITE_API_URL se a API rodar em outro endereço
npm run dev
```

O terminal informa o endereço local (por padrão `http://localhost:5173`). Não feche o processo enquanto estiver desenvolvendo. Inicie a API antes (ou junto) do front-end.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera os arquivos otimizados de produção em `dist/`. |
| `npm run preview` | Visualiza localmente o build gerado. |

## Variáveis de ambiente

| Variável | Finalidade |
| --- | --- |
| `VITE_API_URL` | Endereço base da API (`cafe-horizonte-api`). Fica visível no navegador — nunca coloque segredos aqui. |

## Estrutura

```
src/
  components/   Layout, MenuItemCard, MenuFilter, MenuList, ReservationForm
  context/      CafeContext (tema e categoria selecionada, persistidos em localStorage)
  hooks/        useMenuItems (cardápio via API) e useMyReservations (reservas salvas/consultadas)
  pages/        HomePage, MenuPage, ReservationPage, MyReservationsPage, NotFoundPage
  services/     cafeApi (chamadas HTTP: getMenuItems, postReservation, getReservation, cancelReservation)
  utils/        myReservations (lista de códigos de reserva lembrados neste navegador, em localStorage)
```

## Rotas

- `/` — página inicial (hero, sobre, sugestões do dia vindas da API)
- `/cardapio` — cardápio completo (API) com filtro por categoria
- `/reservas` — formulário de reserva, enviado para a API
- `/minhas-reservas` — consulta e cancelamento de reservas (ver seção abaixo)
- qualquer outra rota — página 404

## Consultar e cancelar reservas

O projeto não tem login, então "minhas reservas" funciona por dois mecanismos combinados:

1. **Automático por navegador**: ao concluir uma reserva, o ID retornado pela API é salvo em `localStorage` (`utils/myReservations.js`). A página `/minhas-reservas` busca automaticamente cada ID salvo (`GET /api/reservations/:id`) e mostra status, dados e um botão de cancelar (`DELETE /api/reservations/:id`, com confirmação em duas etapas).
2. **Código de confirmação manual**: a mensagem de sucesso do formulário mostra o ID da reserva. Em `/minhas-reservas` é possível colar esse código em "Buscar" para consultar (e, a partir daí, cancelar) uma reserva feita em outro navegador ou dispositivo — o código encontrado passa a ser lembrado também neste navegador.

Sem autenticação, qualquer pessoa que tenha o código de uma reserva pode consultá-la ou cancelá-la — aceitável para o escopo didático do projeto, mas não para produção.

## O que mudou em relação à versão HTML/CSS/JS

- Manipulação direta do DOM (`querySelector`, `createElement`) foi substituída por componentes que renderizam a partir de estado e props.
- O filtro do cardápio e a preferência de tema, antes salvos manualmente a cada clique, agora vivem em `CafeContext` e são sincronizados com `localStorage` por um único efeito.
- O cardápio estático e o JSON simulado (apostila 03) foram substituídos por chamadas reais à API (`services/cafeApi.js` + `hooks/useMenuItems.js`), que tratam carregamento, lista vazia e erro (com opção de tentar novamente).
- A validação da reserva deixou de ser só local: o formulário envia os dados para `POST /api/reservations` e exibe por campo os erros devolvidos pelo servidor (fonte única da verdade para as regras de negócio, como "fechado às segundas-feiras").
- O "reservável" por item (um botão fixo em um card específico) foi substituído pelo campo real `available` do banco: itens indisponíveis aparecem esmaecidos com um aviso.

## Limitações conhecidas

- Não há build/deploy configurado; ao publicar em produção como SPA, o servidor precisa devolver `index.html` para qualquer rota (fallback de SPA), senão `/cardapio` e `/reservas` retornam 404 ao atualizar a página diretamente.
- Depende inteiramente da API estar no ar; não há cache local nem modo offline.
- Não há testes automatizados.
