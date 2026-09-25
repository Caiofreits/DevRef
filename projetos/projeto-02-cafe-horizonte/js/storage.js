const STORAGE_KEY = "cafe-horizonte:preferences:v1";

const defaultPreferences = { category: "all", theme: "light" };

export function savePreferences(preferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function loadPreferences() {
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
