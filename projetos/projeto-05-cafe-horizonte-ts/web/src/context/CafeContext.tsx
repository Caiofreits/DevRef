import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CategoryFilter } from "../types";

type Theme = "light" | "dark";

type Preferences = {
  theme: Theme;
  category: CategoryFilter;
};

const STORAGE_KEY = "cafe-horizonte:preferences:v1";
const defaultPreferences: Preferences = { category: "all", theme: "light" };

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function isCategoryFilter(value: unknown): value is CategoryFilter {
  return value === "all" || value === "bebidas" || value === "doces" || value === "salgados";
}

function loadPreferences(): Preferences {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...defaultPreferences };
  try {
    const parsed: unknown = JSON.parse(saved);
    if (typeof parsed !== "object" || parsed === null) return { ...defaultPreferences };
    const candidate = parsed as Record<string, unknown>;
    return {
      theme: isTheme(candidate.theme) ? candidate.theme : defaultPreferences.theme,
      category: isCategoryFilter(candidate.category) ? candidate.category : defaultPreferences.category,
    };
  } catch (error) {
    console.error("Preferências locais inválidas", error);
    return { ...defaultPreferences };
  }
}

type CafeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  category: CategoryFilter;
  setCategory: (category: CategoryFilter) => void;
};

const CafeContext = createContext<CafeContextValue | null>(null);

export function CafeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => loadPreferences().theme);
  const [category, setCategory] = useState<CategoryFilter>(() => loadPreferences().category);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, category }));
  }, [theme, category]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const value: CafeContextValue = { theme, toggleTheme, category, setCategory };

  return <CafeContext.Provider value={value}>{children}</CafeContext.Provider>;
}

export function useCafe(): CafeContextValue {
  const context = useContext(CafeContext);
  if (!context) {
    throw new Error("useCafe deve ser usado dentro de CafeProvider");
  }
  return context;
}
