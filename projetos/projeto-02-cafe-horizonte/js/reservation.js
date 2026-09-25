const CLOSED_WEEKDAY = 1; // segunda-feira: café fechado

function normalizeName(name) {
  return name.trim();
}

export function validateReservation({ name, email, date, time, people }) {
  const errors = {};

  const normalizedName = normalizeName(name ?? "");
  if (normalizedName.length < 3) {
    errors.name = "Informe um nome com ao menos três caracteres.";
  }

  const normalizedEmail = (email ?? "").trim().toLowerCase();
  if (!normalizedEmail.includes("@")) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!date) {
    errors.date = "Escolha uma data para a reserva.";
  } else {
    const requestedDate = new Date(`${date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(requestedDate.getTime())) {
      errors.date = "Data inválida.";
    } else if (requestedDate < today) {
      errors.date = "Escolha uma data futura.";
    } else if (requestedDate.getDay() === CLOSED_WEEKDAY) {
      errors.date = "Fechamos às segundas-feiras. Escolha outro dia.";
    }
  }

  if (!time) {
    errors.time = "Escolha um horário.";
  } else if (time < "08:00" || time > "18:00") {
    errors.time = "Escolha um horário entre 8h e 18h.";
  }

  const peopleNumber = Number(people);
  if (!Number.isInteger(peopleNumber) || peopleNumber < 1 || peopleNumber > 12) {
    errors.people = "Escolha entre 1 e 12 pessoas.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    normalized: {
      name: normalizedName,
      email: normalizedEmail,
      date,
      time,
      people: peopleNumber,
    },
  };
}
