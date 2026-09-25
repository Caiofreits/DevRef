const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const error = new Error(body?.error?.message ?? `Falha HTTP ${response.status}`);
    error.status = response.status;
    error.code = body?.error?.code ?? null;
    error.details = body?.error?.details ?? null;
    throw error;
  }
  if (response.status === 204) return null;
  return response.json();
}

export function resolveImageUrl(imagePath) {
  return imagePath ? `${API_URL}${imagePath}` : null;
}

export async function getMenuItems({ signal } = {}) {
  const body = await request("/api/menu-items", { signal });
  return body.data;
}

export async function postReservation(input) {
  const body = await request("/api/reservations", {
    method: "POST",
    body: JSON.stringify(input),
  });
  return body.data;
}

export async function getReservation(id) {
  const body = await request(`/api/reservations/${id}`);
  return body.data;
}

export async function cancelReservation(id) {
  await request(`/api/reservations/${id}`, { method: "DELETE" });
}
