import mongoose from "mongoose";
import { unlink } from "node:fs/promises";
import path from "node:path";
import { MenuItem } from "../models/MenuItem.js";

async function discardFile(request) {
  if (request.file?.path) {
    await unlink(request.file.path).catch(() => {});
  }
}

function discardImagePath(imagePath) {
  if (!imagePath) return;
  const filename = path.basename(imagePath);
  unlink(path.join("uploads", filename)).catch(() => {});
}

export async function listMenuItems(request, response, next) {
  try {
    const items = await MenuItem.find().sort({ category: 1, name: 1 }).lean();
    response.status(200).json({ data: items });
  } catch (error) {
    next(error);
  }
}

export async function createMenuItem(request, response, next) {
  try {
    const { name, description, category, price } = request.body;
    const item = await MenuItem.create({
      name,
      description: description ?? "",
      category,
      price,
      imagePath: request.body.imagePath ?? null,
    });
    return response.status(201).json({ data: item });
  } catch (error) {
    await discardFile(request);
    return next(error);
  }
}

export async function updateMenuItem(request, response, next) {
  try {
    const { itemId } = request.params;
    if (!mongoose.isValidObjectId(itemId)) {
      return response.status(400).json({
        error: { code: "INVALID_ID", message: "Identificador inválido" },
      });
    }
    const allowedFields = ["name", "description", "category", "price", "available"];
    const changes = Object.fromEntries(
      Object.entries(request.body).filter(([key]) => allowedFields.includes(key)),
    );
    if (Object.keys(changes).length === 0) {
      return response.status(400).json({
        error: { code: "EMPTY_UPDATE", message: "Nenhum campo permitido enviado" },
      });
    }
    const item = await MenuItem.findByIdAndUpdate(itemId, changes, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return response.status(404).json({
        error: { code: "NOT_FOUND", message: "Item não encontrado" },
      });
    }
    return response.status(200).json({ data: item });
  } catch (error) {
    return next(error);
  }
}

export async function deleteMenuItem(request, response, next) {
  try {
    const { itemId } = request.params;
    if (!mongoose.isValidObjectId(itemId)) {
      return response.status(400).json({
        error: { code: "INVALID_ID", message: "Identificador inválido" },
      });
    }
    const item = await MenuItem.findByIdAndDelete(itemId);
    if (!item) {
      return response.status(404).json({
        error: { code: "NOT_FOUND", message: "Item não encontrado" },
      });
    }
    discardImagePath(item.imagePath);
    return response.status(204).send();
  } catch (error) {
    return next(error);
  }
}
