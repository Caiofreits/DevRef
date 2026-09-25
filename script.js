const PAGE_SIZE = 12;

const techBadgeClass = {
    HTML: "portal-badge-html",
    CSS: "portal-badge-css",
    "HTML & CSS": "portal-badge-htmlcss",
    JavaScript: "portal-badge-js",
    React: "portal-badge-react",
    TypeScript: "portal-badge-ts",
    Python: "portal-badge-python",
    C: "portal-badge-c",
    "C++": "portal-badge-cpp",
    "C#": "portal-badge-csharp",
    SQL: "portal-badge-sql",
};

const LANG_CONTENT = {
    web: {
        label: "FRONT END",
        heroDescription: "HTML, CSS, JavaScript, React e TypeScript reunidos em uma referência rápida, com exemplos prontos para consulta.",
        heroLead: "56 comandos, tags e propriedades organizados por tecnologia, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Do zero ao React & TypeScript",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: HTML, CSS, JavaScript, React e TypeScript.",
        referenceSubtitle: "Consulta de tags, propriedades e métodos de HTML, CSS, JavaScript, React e TypeScript.",
        get commands() { return DEVREF_DATA; },
        get modules() { return COURSE_MODULES; },
        get summary() { return COURSE_SUMMARY; },
    },
    python: {
        label: "Python",
        heroDescription: "Python reunido em uma referência rápida, da sintaxe básica à orientação a objetos, com exemplos prontos para consulta.",
        heroLead: "56 comandos, palavras-chave e funções organizados por módulo, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Do zero à Orientação a Objetos",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: sintaxe, estruturas de dados, funções, POO e tratamento de erros.",
        referenceSubtitle: "Consulta de palavras-chave, funções e métodos de Python.",
        get commands() { return PYTHON_DATA; },
        get modules() { return PYTHON_MODULES; },
        get summary() { return PYTHON_SUMMARY; },
    },
    c: {
        label: "C",
        heroDescription: "A linguagem C reunida em uma referência rápida, dos fundamentos aos ponteiros e memória dinâmica, com exemplos prontos para consulta.",
        heroLead: "56 comandos, palavras-chave e funções organizados por módulo, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Dos Fundamentos aos Ponteiros e Structs",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: estrutura de programas, controle, funções, ponteiros e memória.",
        referenceSubtitle: "Consulta de palavras-chave, funções e diretivas da linguagem C.",
        get commands() { return C_DATA; },
        get modules() { return C_MODULES; },
        get summary() { return C_SUMMARY; },
    },
    cpp: {
        label: "C++",
        heroDescription: "C++ reunido em uma referência rápida, da sintaxe à STL e templates, com exemplos prontos para consulta.",
        heroLead: "56 comandos, palavras-chave e funções organizados por módulo, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Da Sintaxe à Programação Orientada a Objetos",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: fundamentos, POO, herança, STL e templates.",
        referenceSubtitle: "Consulta de palavras-chave, classes e funções de C++.",
        get commands() { return CPP_DATA; },
        get modules() { return CPP_MODULES; },
        get summary() { return CPP_SUMMARY; },
    },
    csharp: {
        label: "C#",
        heroDescription: "C# reunido em uma referência rápida, do console às coleções com LINQ, com exemplos prontos para consulta.",
        heroLead: "56 comandos, palavras-chave e métodos organizados por módulo, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Do Console às Coleções com LINQ",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: fundamentos, POO, herança, coleções e LINQ.",
        referenceSubtitle: "Consulta de palavras-chave, métodos e sintaxe de C#.",
        get commands() { return CSHARP_DATA; },
        get modules() { return CSHARP_MODULES; },
        get summary() { return CSHARP_SUMMARY; },
    },
    sql: {
        label: "SQL",
        heroDescription: "SQL reunido em uma referência rápida, do modelo relacional às junções e subconsultas, com exemplos prontos para consulta.",
        heroLead: "56 comandos, cláusulas e funções organizados por módulo, com descrição e exemplo de código prontos para consulta.",
        courseTitle: "Do Modelo Relacional às Junções e Subconsultas",
        courseSubtitle: "Guia completo com explicação e código de cada módulo: modelagem, SELECT, agregações, junções e manipulação de dados.",
        referenceSubtitle: "Consulta de cláusulas, funções e comandos SQL.",
        get commands() { return SQL_DATA; },
        get modules() { return SQL_MODULES; },
        get summary() { return SQL_SUMMARY; },
    },
};

const state = {
    all: [],
    filtered: [],
    filterField: "tech",
    filterValue: "all",
    query: "",
    page: 1,
    lang: "web",
};

function init() {
    document.getElementById("tech-tabs").addEventListener("click", onTabClick);
    document.getElementById("search-input").addEventListener("input", onSearchInput);
    document.getElementById("course-modules").addEventListener("click", onModuleToggle);
    document.getElementById("lang-tabs").addEventListener("click", onLangTabClick);

    loadLanguage("web");
}

function onLangTabClick(event) {
    const btn = event.target.closest(".portal-lang-tab");
    if (!btn) return;

    const lang = btn.dataset.lang;
    if (lang === state.lang || !LANG_CONTENT[lang]) return;

    document
        .querySelectorAll(".portal-lang-tab")
        .forEach((el) => el.classList.remove("is-active"));
    btn.classList.add("is-active");

    loadLanguage(lang);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadLanguage(lang) {
    const content = LANG_CONTENT[lang];
    if (!content) return;

    state.lang = lang;
    state.all = content.commands;
    state.filterValue = "all";
    state.query = "";
    state.page = 1;

    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";

    document.getElementById("hero-description").textContent = content.heroDescription;
    document.getElementById("hero-lead").textContent = content.heroLead;
    document.getElementById("curso-title").textContent = content.courseTitle;
    document.getElementById("curso-subtitle").textContent = content.courseSubtitle;
    document.getElementById("reference-subtitle").textContent = content.referenceSubtitle;

    renderHeroStats();
    renderTechTabs();
    applyFilters();
    renderCourse();
}

function renderHeroStats() {
    const byTech = {};
    for (const item of state.all) {
        byTech[item.tech] = (byTech[item.tech] || 0) + 1;
    }

    const techs = Object.keys(byTech);
    const stats = [
        { label: "Comandos", value: state.all.length },
        { label: "Tecnologias", value: techs.length },
        { label: "Categorias", value: new Set(state.all.map((i) => i.category)).size },
    ];

    const container = document.getElementById("hero-stats");
    container.innerHTML = stats
        .map(
            (s) => `
        <div class="portal-hero-stat">
            <strong>${s.value}</strong>
            <span>${s.label}</span>
        </div>`
        )
        .join("");
}

function getFilterField() {
    const uniqueTechs = new Set(state.all.map((item) => item.tech));
    return uniqueTechs.size > 1 ? "tech" : "category";
}

function renderTechTabs() {
    const container = document.getElementById("tech-tabs");
    state.filterField = getFilterField();
    const values = Array.from(new Set(state.all.map((item) => item[state.filterField])));

    const buttons = [{ value: "all", label: "Todos" }, ...values.map((value) => ({ value, label: value }))];

    container.innerHTML = buttons
        .map(
            (b) => `<button class="portal-tab ${b.value === "all" ? "is-active" : ""}" data-value="${escapeHtml(b.value)}">${escapeHtml(b.label)}</button>`
        )
        .join("");
}

function onTabClick(event) {
    const btn = event.target.closest(".portal-tab");
    if (!btn) return;

    document
        .querySelectorAll(".portal-tab")
        .forEach((el) => el.classList.remove("is-active"));
    btn.classList.add("is-active");

    state.filterValue = btn.dataset.value;
    state.page = 1;
    applyFilters();
}

function onSearchInput(event) {
    state.query = event.target.value.trim().toLowerCase();
    state.page = 1;
    applyFilters();
}

function applyFilters() {
    state.filtered = state.all.filter((item) => {
        const matchesFilter = state.filterValue === "all" || item[state.filterField] === state.filterValue;
        const matchesQuery =
            !state.query ||
            [item.category, item.command, item.description]
                .join(" ")
                .toLowerCase()
                .includes(state.query);
        return matchesFilter && matchesQuery;
    });

    render();
}

function totalPages() {
    return Math.max(1, Math.ceil(state.filtered.length / PAGE_SIZE));
}

function render() {
    renderResultCount();
    renderTable();
    renderPagination();
}

function renderResultCount() {
    const el = document.getElementById("result-count");
    const n = state.filtered.length;
    el.textContent = `${n} comando${n === 1 ? "" : "s"}`;
    el.className = "portal-status " + (n > 0 ? "portal-status-ok" : "portal-status-error");
}

function renderTable() {
    const tbody = document.getElementById("table-body");
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = state.filtered.slice(start, start + PAGE_SIZE);

    if (pageItems.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="portal-empty-state">
                    Nenhum comando encontrado.
                </td>
            </tr>`;
        return;
    }

    tbody.innerHTML = pageItems
        .map(
            (item) => `
        <tr>
            <td>
                <span class="portal-badge ${techBadgeClass[item.tech] || "portal-badge-neutral"}">
                    ${escapeHtml(item.tech)}
                </span>
            </td>
            <td>
                <div class="portal-primary-text">${escapeHtml(item.category)}</div>
            </td>
            <td>
                <span class="portal-code">${escapeHtml(item.command)}</span>
            </td>
            <td>
                <div class="portal-secondary-text">${escapeHtml(item.description)}</div>
            </td>
            <td>
                <code class="portal-example">${escapeHtml(item.example)}</code>
            </td>
        </tr>`
        )
        .join("");
}

function renderPagination() {
    const pages = totalPages();
    const summary = document.getElementById("pagination-summary");
    summary.innerHTML = `
        Página ${state.page} de ${pages}
        <span>&#8226;</span>
        ${state.filtered.length} total`;

    const actions = document.getElementById("pagination-actions");
    actions.innerHTML = "";

    if (state.page > 1) {
        actions.appendChild(makePageButton("Anterior", state.page - 1));
    }

    if (state.page < pages) {
        actions.appendChild(makePageButton("Próxima", state.page + 1));
    }
}

function makePageButton(label, page) {
    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-secondary";
    btn.textContent = label;
    btn.addEventListener("click", () => {
        state.page = page;
        render();
        document.getElementById("reference").scrollIntoView({ behavior: "smooth" });
    });
    return btn;
}

function escapeHtml(str) {
    return String(str ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderCourse() {
    renderModules();
    renderSummary();
}

function renderModules() {
    const container = document.getElementById("course-modules");
    const modules = LANG_CONTENT[state.lang].modules;
    if (!container || !modules) return;

    container.innerHTML = modules
        .map((mod, index) => `
        <article class="portal-module ${index === 0 ? "is-open" : ""}" data-module="${mod.id}">
            <button class="portal-module-header" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                <span class="portal-module-heading">
                    <span class="portal-badge ${techBadgeClass[mod.tech] || "portal-badge-neutral"}">${escapeHtml(mod.tech)}</span>
                    <span class="portal-module-title">Módulo ${mod.number} &middot; ${escapeHtml(mod.title)}</span>
                </span>
                <span class="portal-module-chevron" aria-hidden="true">&#9662;</span>
            </button>
            <div class="portal-module-body">
                <p class="portal-module-intro">${escapeHtml(mod.intro)}</p>
                ${mod.sections.map(renderModuleSection).join("")}
            </div>
        </article>`)
        .join("");
}

function renderModuleSection(section) {
    const heading = section.heading
        ? `<h3 class="portal-section-heading">${escapeHtml(section.heading)}</h3>`
        : "";
    const text = section.text
        ? `<p class="portal-secondary-text portal-section-text">${escapeHtml(section.text)}</p>`
        : "";
    const codeBlock = section.code
        ? `
        ${section.codeLabel ? `<div class="portal-code-label">${escapeHtml(section.codeLabel)}</div>` : ""}
        <pre class="portal-code-block"><code>${escapeHtml(section.code)}</code></pre>`
        : "";
    const list = section.list
        ? `
        ${section.listLabel ? `<div class="portal-code-label">${escapeHtml(section.listLabel)}</div>` : ""}
        <dl class="portal-definition-list">
            ${section.list
                .map(
                    ([term, desc]) => `
                <div class="portal-definition-item">
                    <dt>${escapeHtml(term)}</dt>
                    <dd>${escapeHtml(desc)}</dd>
                </div>`
                )
                .join("")}
        </dl>`
        : "";

    return `<div class="portal-module-section">${heading}${text}${codeBlock}${list}</div>`;
}

function renderSummary() {
    const container = document.getElementById("course-summary");
    const summary = LANG_CONTENT[state.lang].summary;
    if (!container || !summary) return;

    container.innerHTML = `
        <div class="portal-summary-header">
            <div class="portal-eyebrow">Resumo</div>
            <h2>${escapeHtml(summary.heading)}</h2>
        </div>
        <div class="table-responsive">
            <table class="table portal-table">
                <thead>
                    <tr>${summary.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join("")}</tr>
                </thead>
                <tbody>
                    ${summary.rows
                        .map((row) => {
                            const badgeKey = techBadgeClass[row[0].replace(/[0-9]/g, "").trim()];
                            const firstCell = badgeKey
                                ? `<span class="portal-badge ${badgeKey}">${escapeHtml(row[0])}</span>`
                                : `<span class="portal-primary-text">${escapeHtml(row[0])}</span>`;
                            return `
                    <tr>
                        <td>${firstCell}</td>
                        <td class="portal-primary-text">${escapeHtml(row[1])}</td>
                        <td class="portal-secondary-text">${escapeHtml(row[2])}</td>
                        <td class="portal-secondary-text">${escapeHtml(row[3])}</td>
                    </tr>`;
                        })
                        .join("")}
                </tbody>
            </table>
        </div>`;
}

function onModuleToggle(event) {
    const header = event.target.closest(".portal-module-header");
    if (!header) return;

    const module = header.closest(".portal-module");
    const isOpen = module.classList.toggle("is-open");
    header.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

init();
