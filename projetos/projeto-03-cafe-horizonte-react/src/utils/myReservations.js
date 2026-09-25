const STORAGE_KEY = "cafe-horizonte:my-reservations:v1";

export function loadSavedReservationIds() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Lista de reservas salva é inválida", error);
    return [];
  }
}

export function rememberReservationId(id) {
  const current = loadSavedReservationIds();
  if (current.includes(id)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, id]));
}

export function forgetReservationId(id) {
  const current = loadSavedReservationIds();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current.filter((savedId) => savedId !== id)));
}
