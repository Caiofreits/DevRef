# DevRef · Guia de Comandos

Um site com o propósito de espalhar conhecimento de uma maneira simples e dinâmica: referência técnica com comandos, cursos e resumos para múltiplas linguagens (WEB — HTML/CSS/JavaScript/React/TypeScript —, Python, C, C++, C# e SQL).

## Estrutura do projeto

```
index.html          Página principal (marcação de todas as seções)
styles.css           Estilos do site
script.js             Lógica: troca de linguagem, filtros, paginação, acordeão de módulos

data/                Dados de cada linguagem (comandos, módulos do curso, resumo)
  data.js / course-data.js                 WEB
  data-python.js / course-data-python.js   Python
  data-c.js / course-data-c.js             C
  data-cpp.js / course-data-cpp.js         C++
  data-csharp.js / course-data-csharp.js   C#
  data-sql.js / course-data-sql.js         SQL

assets/              Imagens usadas no site (logo, favicon, ilustração do hero)

source-docs/         Documentos .docx de origem (curso completo de cada linguagem)
source-logos/        Imagens originais de logo/ilustração, antes do recorte final

.claude/launch.json  Configuração do servidor de desenvolvimento local
```

## Rodando localmente

O site é 100% estático (HTML/CSS/JS puro, sem build step). Basta servir a pasta por HTTP, por exemplo:

```bash
python -m http.server 5173
```

Depois acesse `http://localhost:5173`.

## Adicionando uma nova linguagem

1. Crie `data/data-<idioma>.js` com um array de comandos (mesmo formato de `data-python.js`).
2. Crie `data/course-data-<idioma>.js` com os módulos do curso e o resumo (mesmo formato de `course-data-python.js`).
3. Inclua os dois `<script>` em `index.html`.
4. Registre a linguagem em `LANG_CONTENT` (em `script.js`) e adicione o botão correspondente em `#lang-tabs` (em `index.html`).
