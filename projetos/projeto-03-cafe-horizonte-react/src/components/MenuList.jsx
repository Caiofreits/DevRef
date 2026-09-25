import { MenuItemCard } from "./MenuItemCard";

export function MenuList({ items }) {
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
