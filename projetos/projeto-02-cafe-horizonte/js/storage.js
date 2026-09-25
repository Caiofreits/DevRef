const STORAGE_KEY = "cafe-horizonte:preferences:v1";

const defaultPreferences = { category: "all", theme: "light" };

export function savePreferences(preferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error("Não foi possível salvar as preferências locais", error);
  }
}

export function loadPreferences() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaultPreferences };
    const parsed = JSON.parse(saved);
    return typeof parsed === "object" && parsed !== null
      ? { ...defaultPreferences, ...parsed }
      : { ...defaultPreferences };
  } catch (error) {
    console.error("Preferências locais indisponíveis", error);
    return { ...defaultPreferences };
  }
}
