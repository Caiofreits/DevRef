import { resolveImageUrl } from "../services/cafeApi";

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function MenuItemCard({ name, description, price, imagePath, available = true }) {
  const imageUrl = resolveImageUrl(imagePath);

  return (
    <article className={available ? "menu-card" : "menu-card menu-card--unavailable"}>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <h3>{name}</h3>
      {description && <p>{description}</p>}
      <p className="price">{formatPrice(price)}</p>
      {!available && <p className="menu-card-status">Indisponível no momento</p>}
    </article>
  );
}
