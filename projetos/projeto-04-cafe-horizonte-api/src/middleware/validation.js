import { unlink } from "node:fs/promises";

const CLOSED_WEEKDAY = 1; // segunda-feira: café fechado

function validationError(response, details) {
  return response.status(400).json({
    error: {
      code: "VALIDATION_ERROR",
      message: "Revise os campos enviados",
      details,
    },
  });
}

async function discardUploadedFile(request) {
  if (request.file?.path) {
    await unlink(request.file.path).catch(() => {});
  }
}

export async function validateMenuItemBody(request, response, next) {
  const { name, category, price } = request.body;
  const details = {};

  if (typeof name !== "string" || name.trim().length < 3) {
    details.name = "Informe um nome com ao menos três caracteres";
  }
  if (!["bebidas", "doces", "salgados"].includes(category)) {
    details.category = "Escolha uma categoria válida";
  }
  const priceNumber = typeof price === "string" ? Number(price) : price;
  if (typeof priceNumber !== "number" || !Number.isFinite(priceNumber) || priceNumber < 0) {
    details.price = "Informe um preço numérico maior ou igual a zero";
  }

  if (Object.keys(details).length > 0) {
    await discardUploadedFile(request);
    return validationError(response, details);
  }

  request.body.name = name.trim();
  request.body.price = priceNumber;
  return next();
}

export function validateReservationBody(request, response, next) {
  const { name, email, date, time, people } = request.body;
  const details = {};

  if (typeof name !== "string" || name.trim().length < 3) {
    details.name = "Informe o nome da reserva";
  }
  if (typeof email !== "string" || !email.includes("@")) {
    details.email = "Informe um e-mail válido";
  }

  let requestedDate = null;
  if (typeof date !== "string" || Number.isNaN(Date.parse(date))) {
    details.date = "Informe uma data válida";
  } else {
    requestedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (requestedDate < today) {
      details.date = "Escolha uma data futura";
    } else if (requestedDate.getUTCDay() === CLOSED_WEEKDAY) {
      details.date = "Fechamos às segundas-feiras. Escolha outro dia";
    }
  }

  if (typeof time !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    details.time = "Use o formato HH:MM";
  } else if (time < "08:00" || time > "18:00") {
    details.time = "Escolha um horário entre 8h e 18h";
  }

  if (!Number.isInteger(people) || people < 1 || people > 12) {
    details.people = "Escolha entre 1 e 12 pessoas";
  }

  if (Object.keys(details).length > 0) {
    return validationError(response, details);
  }

  request.body.name = name.trim();
  request.body.email = email.trim().toLowerCase();
  return next();
}
