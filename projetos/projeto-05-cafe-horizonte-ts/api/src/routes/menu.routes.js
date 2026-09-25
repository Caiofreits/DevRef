import { Router } from "express";
import {
  createMenuItem,
  deleteMenuItem,
  listMenuItems,
  updateMenuItem,
} from "../controllers/menu.controller.js";
import { validateMenuItemBody } from "../middleware/validation.js";
import { normalizeMultipartMenuItem, upload } from "../upload.js";

export const menuRouter = Router();

menuRouter.get("/", listMenuItems);
menuRouter.post(
  "/",
  upload.single("image"),
  normalizeMultipartMenuItem,
  validateMenuItemBody,
  createMenuItem,
);
menuRouter.patch("/:itemId", updateMenuItem);
menuRouter.delete("/:itemId", deleteMenuItem);
