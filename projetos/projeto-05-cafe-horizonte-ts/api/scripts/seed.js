import { copyFile } from "node:fs/promises";
import path from "node:path";
import mongoose from "mongoose";
import { connectDatabase } from "../src/database.js";
import { MenuItem } from "../src/models/MenuItem.js";

const sourceImagesDir = path.resolve("..", "web", "public", "img");

const items = [
  {
    name: "Cappuccino",
    description: "Espresso, leite vaporizado e espuma cremosa.",
    price: 14,
    category: "bebidas",
    sourceImage: "cappuccino.webp",
  },
  {
    name: "Espresso",
    description: "Extração curta e sabor intenso.",
    price: 8,
    category: "bebidas",
    sourceImage: "cafe-expresso.avif",
  },
  {
    name: "Coado do dia",
    description: "Grão selecionado e preparo individual.",
    price: 11,
    category: "bebidas",
    sourceImage: "cafe-coado.png",
  },
  {
    name: "Torta de maçã",
    description: "Fatia generosa com canela, servida morna.",
    price: 13,
    category: "doces",
    sourceImage: "torta-maca.png",
  },
  {
    name: "Chá gelado de frutas vermelhas",
    description: "Preparo do dia, servido com gelo e hortelã.",
    price: 9,
    category: "bebidas",
    sourceImage: "cha-gelado.webp",
  },
];

async function seed() {
  await connectDatabase(process.env.MONGODB_URI);
  await MenuItem.deleteMany({});

  for (const { sourceImage, ...item } of items) {
    let imagePath = null;
    try {
      await copyFile(path.join(sourceImagesDir, sourceImage), path.join("uploads", sourceImage));
      imagePath = `/uploads/${sourceImage}`;
    } catch (error) {
      console.warn(`Não foi possível copiar a imagem ${sourceImage}:`, error.message);
    }
    await MenuItem.create({ ...item, imagePath });
  }

  console.log(`${items.length} itens inseridos.`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("Falha ao popular o banco", error);
  process.exit(1);
});
