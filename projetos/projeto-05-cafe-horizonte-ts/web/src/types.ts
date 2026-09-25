export type MenuCategory = "bebidas" | "doces" | "salgados";
export type CategoryFilter = "all" | MenuCategory;

export type MenuItem = {
  _id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  available: boolean;
  imagePath: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ReservationInput = {
  name: string;
  email: string;
  date: string;
  time: string;
  people: number;
  notes?: string;
};

export type ReservationStatus = "pending" | "confirmed" | "cancelled";

export type Reservation = {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  people: number;
  status: ReservationStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type LoadState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "empty" }
  | { status: "error"; message: string };
