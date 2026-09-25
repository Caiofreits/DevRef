# Café Horizonte — versão TypeScript

Migração do front-end React do Café Horizonte (`projeto-03-cafe-horizonte-react`) para TypeScript, seguindo a apostila 05. Esta pasta faz parte de `projeto-05-cafe-horizonte-ts`, uma cópia completa e independente do projeto no ponto em que a apostila 04 (Full Stack) foi concluída — a API correspondente está em `../api`, com banco próprio (`cafe_horizonte_ts`), isolada da versão JavaScript original.

## Pré-requisitos

- Node.js 18 ou superior (testado com Node 24.19.0 / npm 11.17.0).
- A API em `../api` rodando (por padrão em `http://localhost:3000`) — sem ela, o cardápio, as sugestões do dia e o formulário de reservas não funcionam.

## Instalação

```bash
npm install
cp .env.example .env   # ajuste VITE_API_URL se a API rodar em outro endereço
npm run dev
```

O terminal informa o endereço local (por padrão `http://localhost:5173`). Inicie a API (`../api`) antes do front-end.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite não checa tipos aqui, só transpila). |
| `npm run build` | Roda `tsc -b` (checagem de tipos) e depois `vite build`. Falha se houver erro de tipo. |
| `npm run type-check` | Só checa tipos (`tsc -b --noEmit`), sem gerar build — útil durante o desenvolvimento. |
| `npm run preview` | Visualiza localmente o build gerado. |

## Configuração do TypeScript

`tsconfig.app.json` ativa o modo mais estrito recomendado pela apostila:

```json
{ "strict": true, "noUncheckedIndexedAccess": true, "exactOptionalPropertyTypes": true }
```

`exactOptionalPropertyTypes` de fato pegou um bug em desenvolvimento: o serviço de API estava passando `undefined` explicitamente para campos opcionais do `fetch` (`method`, `body`, `signal`), o que o modo estrito rejeita. A correção foi montar o objeto de opções apenas com as chaves realmente presentes (ver `src/services/cafeApi.ts`).

## Variáveis de ambiente

| Variável | Finalidade |
| --- | --- |
| `VITE_API_URL` | Endereço base da API. Tipada em `src/vite-env.d.ts`. Fica visível no navegador — nunca coloque segredos aqui. |

## Estrutura

```
src/
  types.ts        Entidade central: MenuItem, ReservationInput, Reservation, LoadState<T>
  components/     Layout, MenuItemCard, MenuFilter, MenuList, ReservationForm
  context/        CafeContext (tema e categoria selecionada, persistidos em localStorage)
  hooks/          useMenuItems e useMyReservations, com estados tipados
  pages/          HomePage, MenuPage, ReservationPage, MyReservationsPage, NotFoundPage
  services/       cafeApi.ts — recebe unknown do fetch e só devolve MenuItem/Reservation após validar
  utils/          myReservations (lista de códigos de reserva lembrados neste navegador)
```

## Rotas

- `/` — página inicial (hero, sobre, sugestões do dia vindas da API)
- `/cardapio` — cardápio completo (API) com filtro por categoria
- `/reservas` — formulário de reserva, enviado para a API
- `/minhas-reservas` — consulta e cancelamento de reservas
- qualquer outra rota — página 404

## O que a migração para TypeScript mudou de fato

- **Entidade central em `types.ts`**: `MenuItem`, `Reservation` e `ReservationInput` descrevem o contrato real da API (`_id`, `imagePath`, `category` como união `"bebidas" | "doces" | "salgados"`), não um modelo genérico — mudar o contrato aqui aponta o editor para todo componente afetado.
- **Serviço de API valida `unknown`**: `cafeApi.ts` nunca confia que o `fetch` devolveu o formato esperado. `isMenuItem`/`isReservation` são guards que checam campo a campo antes de qualquer dado entrar na aplicação; itens malformados são descartados com aviso no console em vez de quebrar a tela.
- **Estados de carregamento como união discriminada**: `useMenuItems` expõe `state: LoadState<MenuItem[]>` (`loading | success | empty | error`), eliminando combinações impossíveis como "sucesso" com lista indefinida.
- **Eventos tipados**: `ReservationForm` usa `ChangeEvent<HTMLInputElement | HTMLTextAreaElement>` e `FormEvent<HTMLFormElement>` em vez de `event` implícito.
- **Erros com classe própria**: `ApiError` carrega `status`, `code` e `details` tipados; os componentes usam `error instanceof ApiError` para decidir como exibir a falha, em vez de acessar propriedades de um `any`.
- **Dois bugs reais encontrados pelo compilador**: `MenuList` usava `key={item.id}` — o campo correto é `_id` (React sempre recebia `key={undefined}`); e `exactOptionalPropertyTypes` revelou o problema de `undefined` explícito descrito acima. Ambos passavam despercebidos em JavaScript.

## Consultar e cancelar reservas

Sem login, "minhas reservas" combina dois mecanismos: o ID de cada reserva criada é lembrado automaticamente em `localStorage` (`GET`/`DELETE /api/reservations/:id`), e o código de confirmação mostrado após reservar pode ser digitado em `/minhas-reservas` para consultar uma reserva feita em outro dispositivo. Qualquer pessoa com o código pode consultar ou cancelar — aceitável para o escopo didático, não para produção.

## Limitações conhecidas

- Não há build/deploy configurado; ao publicar em produção como SPA, o servidor precisa devolver `index.html` para qualquer rota, senão `/cardapio` e `/reservas` retornam 404 ao atualizar a página diretamente.
- Depende inteiramente da API em `../api` estar no ar; não há cache local nem modo offline.
- Não há testes automatizados.
- `npm run dev` (Vite) não bloqueia em erro de tipo — só `npm run build`/`npm run type-check` checam.
