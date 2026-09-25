import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cafe-horizonte:preferences:v1";
const defaultPreferences = { category: "all", theme: "light" };

function loadPreferences() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...defaultPreferences };
  try {
    const parsed = JSON.parse(saved);
    return typeof parsed === "object" && parsed !== null
      ? { ...defaultPreferences, ...parsed }
      : { ...defaultPreferences };
  } catch (error) {
    console.error("Preferências locais inválidas", error);
    return { ...defaultPreferences };
  }
}

const CafeContext = createContext(null);

export function CafeProvider({ children }) {
  const [theme, setTheme] = useState(() => loadPreferences().theme);
  const [category, setCategory] = useState(() => loadPreferences().category);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, category }));
  }, [theme, category]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const value = { theme, toggleTheme, category, setCategory };

  return <CafeContext.Provider value={value}>{children}</CafeContext.Provider>;
}

export function useCafe() {
  const context = useContext(CafeContext);
  if (!context) {
    throw new Error("useCafe deve ser usado dentro de CafeProvider");
  }
  return context;
}
