import { filterMenu } from "./menu.js";
import { validateReservation } from "./reservation.js";
import { loadPreferences, savePreferences } from "./storage.js";

const preferences = loadPreferences();

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.textContent = theme === "dark" ? "Tema claro" : "Tema escuro";
  }
}

function updateMenuStatus(count) {
  const status = document.getElementById("menu-status");
  if (!status) return;
  status.textContent =
    count === 0
      ? "Nenhum item encontrado nesta categoria."
      : `${count} ${count === 1 ? "item encontrado" : "itens encontrados"}.`;
}

function setActiveFilter(category) {
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.category === category;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initTheme() {
  applyTheme(preferences.theme);
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    preferences.theme = nextTheme;
    savePreferences(preferences);
  });
}

function initMenuFilters() {
  const filters = document.getElementById("menu-filters");
  if (!filters) return;

  function applyFilter(category) {
    const count = filterMenu(category);
    updateMenuStatus(count);
    setActiveFilter(category);
    preferences.category = category;
    savePreferences(preferences);
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    applyFilter(button.dataset.category);
  });

  applyFilter(preferences.category);
}

function showFieldError(field, message) {
  const errorEl = document.getElementById(`${field}-error`);
  if (errorEl) errorEl.textContent = message ?? "";
}

function clearFieldErrors() {
  ["name", "email", "date", "time", "people"].forEach((field) =>
    showFieldError(field, ""),
  );
}

function initReservationForm() {
  const form = document.getElementById("reservation-form");
  if (!form) return;
  const summary = document.getElementById("reservation-summary");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldErrors();
    if (summary) summary.textContent = "";

    const formData = new FormData(form);
    const result = validateReservation({
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      people: formData.get("people"),
    });

    if (!result.valid) {
      Object.entries(result.errors).forEach(([field, message]) =>
        showFieldError(field, message),
      );
      const firstInvalidField = Object.keys(result.errors)[0];
      form.querySelector(`#${firstInvalidField}`)?.focus();
      return;
    }

    if (summary) {
      summary.textContent = `Reserva de ${result.normalized.name} confirmada para ${result.normalized.date} às ${result.normalized.time}, ${result.normalized.people} pessoa(s).`;
    }
    form.reset();
  });
}

function renderSuggestion(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.imageAlt ?? "";
    card.append(img);
  }

  const title = document.createElement("h3");
  title.textContent = item.name;
  card.append(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  card.append(description);

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = item.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  card.append(price);

  return card;
}

async function loadSuggestions() {
  const status = document.getElementById("suggestions-status");
  const list = document.getElementById("suggestions-list");
  const retry = document.getElementById("suggestions-retry");
  if (!status || !list) return;

  retry?.setAttribute("hidden", "");
  status.textContent = "Carregando sugestões...";
  list.replaceChildren();

  try {
    const response = await fetch("data/menu-items.json");
    if (!response.ok) {
      throw new Error(`Falha HTTP ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Formato de sugestões inválido");
    }
    if (data.length === 0) {
      status.textContent = "Nenhuma sugestão disponível hoje.";
      return;
    }
    list.replaceChildren(...data.map(renderSuggestion));
    status.textContent = `${data.length} sugestões encontradas.`;
  } catch (error) {
    console.error(error);
    status.textContent = "Não foi possível carregar as sugestões.";
    retry?.removeAttribute("hidden");
  }
}

function initSuggestions() {
  const retry = document.getElementById("suggestions-retry");
  retry?.addEventListener("click", loadSuggestions);
  loadSuggestions();
}

initMobileNav();
initTheme();
initMenuFilters();
initReservationForm();
initSuggestions();
