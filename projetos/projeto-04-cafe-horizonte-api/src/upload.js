import path from "node:path";
import { randomUUID } from "node:crypto";
import multer from "multer";

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

const storage = multer.diskStorage({
  destination: "uploads/",
  filename(request, file, callback) {
    const extension = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.has(extension)) {
      return callback(new Error("Extensão de arquivo não permitida"));
    }
    return callback(null, `${randomUUID()}${extension}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(request, file, callback) {
    callback(null, allowedMimeTypes.has(file.mimetype));
  },
});

export function normalizeMultipartMenuItem(request, response, next) {
  if (typeof request.body.price === "string") {
    request.body.price = Number(request.body.price);
  }
  request.body.imagePath = request.file ? `/uploads/${request.file.filename}` : null;
  next();
}
