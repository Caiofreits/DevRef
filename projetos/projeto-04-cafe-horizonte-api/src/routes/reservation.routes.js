import { Router } from "express";
import {
  createReservation,
  deleteReservation,
  getReservation,
} from "../controllers/reservation.controller.js";
import { validateReservationBody } from "../middleware/validation.js";

export const reservationRouter = Router();

reservationRouter.post("/", validateReservationBody, createReservation);
reservationRouter.get("/:reservationId", getReservation);
reservationRouter.delete("/:reservationId", deleteReservation);
