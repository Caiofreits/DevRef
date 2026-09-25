export const menuItems = [
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso, leite vaporizado e espuma cremosa.",
    price: 14,
    category: "bebidas",
    image: "img/cappuccino.webp",
    imageAlt: "Cappuccino servido em uma xícara branca",
    reservable: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Extração curta e sabor intenso.",
    price: 8,
    category: "bebidas",
    image: "img/cafe-expresso.avif",
    imageAlt: "Xícara de espresso recém-preparado",
    reservable: false,
  },
  {
    id: "cafe-coado",
    name: "Coado do dia",
    description: "Grão selecionado e preparo individual.",
    price: 11,
    category: "bebidas",
    image: "img/cafe-coado.png",
    imageAlt: "Café coado sendo preparado no filtro",
    reservable: false,
  },
  {
    id: "torta-de-maca",
    name: "Torta de maçã",
    description: "Fatia generosa com canela, servida morna.",
    price: 13,
    category: "doces",
    image: "img/torta-maca.png",
    imageAlt: "Fatia de torta de maçã com canela",
    reservable: false,
  },
  {
    id: "cha-gelado",
    name: "Chá gelado de frutas vermelhas",
    description: "Preparo do dia, servido com gelo e hortelã.",
    price: 9,
    category: "bebidas",
    image: "img/cha-gelado.webp",
    imageAlt: "Copo de chá gelado de frutas vermelhas com gelo e hortelã",
    reservable: false,
  },
];

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function createMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  card.dataset.id = item.id;
  card.dataset.category = item.category;

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.imageAlt;
  card.append(img);

  const title = document.createElement("h3");
  title.textContent = item.name;
  card.append(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  card.append(description);

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = formatPrice(item.price);
  card.append(price);

  if (item.reservable) {
    const link = document.createElement("a");
    link.className = "button";
    link.href = "#contact";
    link.textContent = "Reservar uma mesa";
    card.append(link);
  }

  return card;
}

export function renderMenu(items) {
  const list = document.getElementById("menu-list");
  if (!list) return;
  list.replaceChildren(...items.map(createMenuCard));
}

export function filterMenu(category) {
  const items =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);
  renderMenu(items);
  return items.length;
}
