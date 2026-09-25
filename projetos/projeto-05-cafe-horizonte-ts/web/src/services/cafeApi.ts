import type { MenuCategory, MenuItem, Reservation, ReservationInput } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export class ApiError extends Error {
  status: number;
  code: string | null;
  details: Record<string, string> | null;

  constructor(message: string, status: number, code: string | null, details: Record<string, string> | null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

const MENU_CATEGORIES: readonly MenuCategory[] = ["bebidas", "doces", "salgados"];

function isMenuCategory(value: unknown): value is MenuCategory {
  return typeof value === "string" && (MENU_CATEGORIES as readonly string[]).includes(value);
}

export function isMenuItem(value: unknown): value is MenuItem {
  if (!isRecord(value)) return false;
  return (
    typeof value._id === "string" &&
    typeof value.name === "string" &&
    typeof value.description === "string" &&
    isMenuCategory(value.category) &&
    typeof value.price === "number" &&
    typeof value.available === "boolean" &&
    (value.imagePath === null || typeof value.imagePath === "string") &&
    typeof value.createdAt === "string" &&
    typeof value.updatedAt === "string"
  );
}

export function isReservation(value: unknown): value is Reservation {
  if (!isRecord(value)) return false;
  return (
    typeof value._id === "string" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    typeof value.date === "string" &&
    typeof value.time === "string" &&
    typeof value.people === "number" &&
    (value.status === "pending" || value.status === "confirmed" || value.status === "cancelled") &&
    typeof value.notes === "string"
  );
}

type RequestOptions = {
  method?: string;
  body?: string;
  signal?: AbortSignal;
};

async function request(path: string, options: RequestOptions = {}): Promise<unknown> {
  const init: RequestInit = { headers: { "Content-Type": "application/json" } };
  if (options.method !== undefined) init.method = options.method;
  if (options.body !== undefined) init.body = options.body;
  if (options.signal !== undefined) init.signal = options.signal;

  const response = await fetch(`${API_URL}${path}`, init);

  if (!response.ok) {
    const body: unknown = await response.json().catch(() => null);
    const errorBody = isRecord(body) && isRecord(body.error) ? body.error : null;
    const message = typeof errorBody?.message === "string" ? errorBody.message : `Falha HTTP ${response.status}`;
    const code = typeof errorBody?.code === "string" ? errorBody.code : null;
    const details = isRecord(errorBody?.details) ? (errorBody.details as Record<string, string>) : null;
    throw new ApiError(message, response.status, code, details);
  }

  if (response.status === 204) return null;
  return response.json();
}

export function resolveImageUrl(imagePath: string | null): string | null {
  return imagePath ? `${API_URL}${imagePath}` : null;
}

export async function getMenuItems(options: { signal?: AbortSignal } = {}): Promise<MenuItem[]> {
  const requestOptions: RequestOptions = {};
  if (options.signal !== undefined) requestOptions.signal = options.signal;
  const body = await request("/api/menu-items", requestOptions);
  if (!isRecord(body) || !Array.isArray(body.data)) {
    throw new Error("Formato de resposta do cardápio inválido");
  }
  const items = body.data.filter(isMenuItem);
  if (items.length !== body.data.length) {
    console.error("Alguns itens do cardápio vieram em formato inesperado e foram ignorados");
  }
  return items;
}

export async function postReservation(input: ReservationInput): Promise<Reservation> {
  const body = await request("/api/reservations", {
    method: "POST",
    body: JSON.stringify(input),
  });
  const data = isRecord(body) ? body.data : null;
  if (!isReservation(data)) {
    throw new Error("Formato de resposta da reserva inválido");
  }
  return data;
}

export async function getReservation(id: string): Promise<Reservation> {
  const body = await request(`/api/reservations/${id}`);
  const data = isRecord(body) ? body.data : null;
  if (!isReservation(data)) {
    throw new Error("Formato de resposta da reserva inválido");
  }
  return data;
}

export async function cancelReservation(id: string): Promise<void> {
  await request(`/api/reservations/${id}`, { method: "DELETE" });
}
