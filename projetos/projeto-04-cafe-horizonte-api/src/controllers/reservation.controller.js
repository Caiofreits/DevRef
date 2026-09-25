import mongoose from "mongoose";
import { Reservation } from "../models/Reservation.js";

export async function createReservation(request, response, next) {
  try {
    const requestedDate = new Date(request.body.date);
    if (requestedDate < new Date()) {
      return response.status(400).json({
        error: {
          code: "RESERVATION_DATE_IN_PAST",
          message: "A reserva deve ser feita para uma data futura",
        },
      });
    }
    const reservation = await Reservation.create({
      ...request.body,
      date: requestedDate,
    });
    return response.status(201).json({ data: reservation });
  } catch (error) {
    return next(error);
  }
}

export async function getReservation(request, response, next) {
  try {
    if (!mongoose.isValidObjectId(request.params.reservationId)) {
      return response.status(400).json({
        error: { code: "INVALID_ID", message: "Identificador inválido" },
      });
    }
    const reservation = await Reservation.findById(request.params.reservationId).lean();
    if (!reservation) {
      return response.status(404).json({
        error: { code: "NOT_FOUND", message: "Reserva não encontrada" },
      });
    }
    return response.status(200).json({ data: reservation });
  } catch (error) {
    return next(error);
  }
}

export async function deleteReservation(request, response, next) {
  try {
    if (!mongoose.isValidObjectId(request.params.reservationId)) {
      return response.status(400).json({
        error: { code: "INVALID_ID", message: "Identificador inválido" },
      });
    }
    const reservation = await Reservation.findByIdAndDelete(request.params.reservationId);
    if (!reservation) {
      return response.status(404).json({
        error: { code: "NOT_FOUND", message: "Reserva não encontrada" },
      });
    }
    return response.status(204).send();
  } catch (error) {
    return next(error);
  }
}
