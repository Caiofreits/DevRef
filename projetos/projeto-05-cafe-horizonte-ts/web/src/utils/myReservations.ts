const STORAGE_KEY = "cafe-horizonte:my-reservations:v1";

export function loadSavedReservationIds(): string[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  try {
    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch (error) {
    console.error("Lista de reservas salva é inválida", error);
    return [];
  }
}

export function rememberReservationId(id: string): void {
  const current = loadSavedReservationIds();
  if (current.includes(id)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, id]));
}

export function forgetReservationId(id: string): void {
  const current = loadSavedReservationIds();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current.filter((savedId) => savedId !== id)));
}
