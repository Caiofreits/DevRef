import { useState, type ChangeEvent, type FormEvent } from "react";
import { ApiError, postReservation } from "../services/cafeApi";
import { rememberReservationId } from "../utils/myReservations";

type ReservationFormState = {
  name: string;
  email: string;
  date: string;
  time: string;
  people: string;
  notes: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "date" | "time" | "people" | "form", string>>;

const initialForm: ReservationFormState = { name: "", email: "", date: "", time: "", people: "2", notes: "" };

export function ReservationForm() {
  const [form, setForm] = useState<ReservationFormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [summary, setSummary] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSummary("");
    setErrors({});
    setSubmitting(true);

    try {
      const reservation = await postReservation({
        ...form,
        people: Number(form.people),
      });
      rememberReservationId(reservation._id);
      setSummary(
        `Reserva de ${reservation.name} confirmada para ${reservation.date.slice(0, 10)} às ${reservation.time}, ${reservation.people} pessoa(s). Guarde o código ${reservation._id} para consultar ou cancelar em "Minhas reservas".`,
      );
      setForm(initialForm);
    } catch (error) {
      if (error instanceof ApiError && error.details) {
        setErrors(error.details);
        const firstInvalidField = Object.keys(error.details)[0];
        if (firstInvalidField) document.getElementById(firstInvalidField)?.focus();
      } else {
        const message = error instanceof Error ? error.message : "Não foi possível concluir a reserva.";
        setErrors({ form: message });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Dados da reserva</legend>

        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <p className="field-error" role="alert">
            {errors.name}
          </p>
        </div>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <p className="field-error" role="alert">
            {errors.email}
          </p>
        </div>

        <div className="field">
          <label htmlFor="date">Data</label>
          <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
          <p className="field-error" role="alert">
            {errors.date}
          </p>
        </div>

        <div className="field">
          <label htmlFor="time">Horário</label>
          <input
            id="time"
            name="time"
            type="time"
            min="08:00"
            max="18:00"
            step={1800}
            aria-describedby="time-hint"
            value={form.time}
            onChange={handleChange}
            required
          />
          <p id="time-hint" className="field-hint">
            Escolha um horário entre 8h e 18h, de terça a domingo.
          </p>
          <p className="field-error" role="alert">
            {errors.time}
          </p>
        </div>

        <div className="field">
          <label htmlFor="people">Número de pessoas</label>
          <input
            id="people"
            name="people"
            type="number"
            min="1"
            max="12"
            value={form.people}
            onChange={handleChange}
            required
          />
          <p className="field-error" role="alert">
            {errors.people}
          </p>
        </div>

        <div className="field">
          <label htmlFor="notes">Observações</label>
          <textarea id="notes" name="notes" rows={4} value={form.notes} onChange={handleChange} />
        </div>
      </fieldset>

      {errors.form && (
        <p className="field-error" role="alert">
          {errors.form}
        </p>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? "Enviando..." : "Solicitar reserva"}
      </button>
      <p className="reservation-summary" role="status">
        {summary}
      </p>
    </form>
  );
}
