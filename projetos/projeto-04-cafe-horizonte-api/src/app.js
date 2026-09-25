import cors from "cors";
import express from "express";
import { errorHandler, notFound } from "./middleware/errors.js";
import { menuRouter } from "./routes/menu.routes.js";
import { reservationRouter } from "./routes/reservation.routes.js";

export const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json({ limit: "1mb" }));

app.use((request, response, next) => {
  const startedAt = Date.now();
  response.on("finish", () => {
    const duration = Date.now() - startedAt;
    console.log(request.method, request.url, response.statusCode, `${duration}ms`);
  });
  next();
});

app.get("/health", (request, response) => {
  response.status(200).json({ status: "ok" });
});

app.use("/uploads", express.static("uploads"));
app.use("/api/menu-items", menuRouter);
app.use("/api/reservations", reservationRouter);

app.use(notFound);
app.use(errorHandler);
