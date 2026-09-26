# DevRef · Command Guide

DevRef is a static, multi-language programming reference. For each language track it offers two things:

- **Course**: a beginner-to-intermediate course split into modules, each with explanations, complete code samples and line-by-line breakdowns, plus a summary table.
- **Command reference**: a searchable, filterable, paginated table of commands, keywords, tags and properties, each with a description and a code example.

The site's content is written in **Brazilian Portuguese** (`lang="pt-BR"`).

## Language tracks

| Track  | Technologies                                  | Course                                       | Reference entries |
|--------|-----------------------------------------------|----------------------------------------------|-------------------|
| FRONT END | HTML, CSS, JavaScript, React, Node/Express/MongoDB, TypeScript | From zero to Full Stack with React & TypeScript (5 modules) | 56 |
| Python | Python                                        | From zero to OOP (5 modules)                 | 56 |
| C      | C                                             | Fundamentals to pointers and structs (5 modules) | 56 |
| C++    | C++                                           | Syntax to OOP, STL and templates (5 modules) | 56 |
| C#     | C#                                            | Console apps to collections with LINQ (5 modules) | 56 |
| SQL    | SQL                                           | Relational model to joins and subqueries (5 modules) | 56 |

## Features

- **Language switcher**: the top bar swaps the whole page (hero text, course, summary and reference table) between tracks without reloading.
- **Search**: filters the reference table as you type, matching category, command and description (case-insensitive).
- **Filter tabs**: on multi-technology tracks (FRONT END) the tabs filter by technology; on single-language tracks they filter by category/module.
- **Pagination**: 12 entries per page (`PAGE_SIZE` in `script.js`).
- **Collapsible course modules**: accordion with `aria-expanded`; the first module starts open.
- **Responsive layout**: breakpoints at 860px and 560px.
- **Safe rendering**: all data is inserted through an `escapeHtml` helper.

## Tech stack

- Plain HTML5, CSS3 and vanilla JavaScript (ES2015+).
- No framework, no dependencies, no `package.json` and no build step.
- Data lives in plain `.js` files that define global constants (`PYTHON_DATA`, `PYTHON_MODULES`, `PYTHON_SUMMARY`, ...), loaded through `<script>` tags. Nothing is fetched at runtime.
- System font stacks only (no web fonts or external CDNs), so the site works offline.

## Project structure

```
index.html           Main page (markup for every section)
styles.css           Site styles (design tokens as CSS custom properties)
script.js            Logic: language switching, filters, search, pagination, module accordion

data/                Content for each track (commands, course modules, summary)
  data.js / course-data.js                 FRONT END
  data-python.js / course-data-python.js   Python
  data-c.js / course-data-c.js             C
  data-cpp.js / course-data-cpp.js         C++
  data-csharp.js / course-data-csharp.js   C#
  data-sql.js / course-data-sql.js         SQL

assets/              Images used by the site (logo, favicon, hero illustration)

source-docs/         Source .docx files (the full course for each track)
source-logos/        Original logo/illustration images, before final cropping

.claude/launch.json  Local dev server configuration (scripts/dev.mjs on port 5173)
scripts/dev.mjs      Starts the static site AND the Café Horizonte API together
```

## Running locally

The site itself is 100% static, so any HTTP server works for browsing the reference and course content. However, the React, Full Stack and TypeScript course modules end with a **live preview** of the Café Horizonte project, which fetches real data from the Node/Express API (`projetos/projeto-04-cafe-horizonte-api`) backed by MongoDB — that preview only shows real data when the API is running.

### Recommended: site + API together

Requires [Node.js](https://nodejs.org/) and a running MongoDB instance on `mongodb://127.0.0.1:27017` (a local install, or adjust `MONGODB_URI`).

```bash
node scripts/dev.mjs
```

This serves the static site on `http://localhost:5173` and the API on `http://localhost:3000` in one command. On first run it installs the API's dependencies and seeds the database automatically. Press `Ctrl+C` to stop both. Without MongoDB running, the site still works — the React/Full Stack/TypeScript previews just show their built-in error state instead of real data, which is itself part of what those modules teach.

### Static site only

If you only want to browse the reference and course content:

```bash
python -m http.server 5173
# on systems where "python" is not available:
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

Alternatives:

- `npx serve .` (requires Node.js)
- VS Code's *Live Server* extension
- Opening `index.html` directly in the browser (`file://`) also works, because the site loads no data via `fetch`.

## Deployment

There is nothing to build: publish the repository root as-is to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). `index.html` is the entry point and all paths are relative.

## Data format

### Reference entries (`data/data-<lang>.js`)

```js
const PYTHON_DATA = [
  {
    "tech": "Python",               // badge / filter tab on multi-tech tracks
    "category": "Tipos Primitivos", // filter tab on single-language tracks
    "command": "int",
    "description": "Tipo para representar números inteiros.",
    "example": "idade = 25"
  },
  // ...
];
```

### Course modules and summary (`data/course-data-<lang>.js`)

```js
const PYTHON_MODULES = [
  {
    "id": "python-fundamentos-e-sintaxe-de",
    "tech": "Python",
    "number": "01",
    "title": "Fundamentos e Sintaxe de Python",
    "intro": "...",
    "sections": [
      {
        "heading": "1.1 ...",
        "text": "...",
        "codeLabel": "...",
        "codeLang": "python",
        "code": "...",
        "listLabel": "...",
        "list": [["term", "explanation"], /* ... */]
      }
    ]
  }
];

const PYTHON_SUMMARY = {
  "heading": "...",
  "columns": ["col 1", "col 2", "col 3", "col 4"],
  "rows": [["...", "...", "...", "..."]]
};
```

Every section field is optional. Summary tables are rendered with exactly four columns.

## Adding a new language

1. Create `data/data-<lang>.js` with the commands array (same format as `data-python.js`).
2. Create `data/course-data-<lang>.js` with the course modules and summary (same format as `course-data-python.js`).
3. Add both `<script>` tags to `index.html`, **before** `script.js`.
4. Register the language in `LANG_CONTENT` in `script.js` (labels, texts and getters for `commands`, `modules` and `summary`), and add its button to `#lang-tabs` in `index.html` with a matching `data-lang`.
5. Optionally add a badge color: an entry in `techBadgeClass` (`script.js`) and the matching `.portal-badge-<lang>` class in `styles.css`. Without one, the neutral badge is used.
