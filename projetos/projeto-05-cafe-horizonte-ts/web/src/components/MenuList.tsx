import { MenuItemCard } from "./MenuItemCard";
import type { MenuItem } from "../types";

export function MenuList({ items }: { items: MenuItem[] }) {
  if (items.length === 0) {
    return <p>Nenhum item disponível no cardápio.</p>;
  }

  return (
    <div className="menu">
      {items.map((item) => (
        <MenuItemCard key={item._id} {...item} />
      ))}
    </div>
  );
}
