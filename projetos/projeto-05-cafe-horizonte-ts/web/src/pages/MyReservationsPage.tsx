import { useState, type ChangeEvent, type FormEvent } from "react";
import { useMyReservations } from "../hooks/useMyReservations";
import type { ReservationStatus } from "../types";

const STATUS_LABEL: Record<ReservationStatus, string> = {
  pending: "Pendente",
  confirmed: "Confirmada",
  cancelled: "Cancelada",
};

function formatDate(isoDate: string): string {
  return isoDate.slice(0, 10);
}

export function MyReservationsPage() {
  const { reservations, status, addByCode, cancel, retry } = useMyReservations();
  const [code, setCode] = useState("");
  const [lookupError, setLookupError] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState("");

  async function handleLookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) return;
    setLookupError("");
    setLookupLoading(true);
    try {
      await addByCode(trimmed);
      setCode("");
    } catch (error) {
      setLookupError(error instanceof Error ? error.message : "Não foi possível buscar a reserva.");
    } finally {
      setLookupLoading(false);
    }
  }

  async function handleCancel(id: string) {
    setCancelError("");
    try {
      await cancel(id);
      setConfirmingId(null);
    } catch (error) {
      setCancelError(error instanceof Error ? error.message : "Não foi possível cancelar a reserva.");
    }
  }

  return (
    <section className="container section" aria-labelledby="titulo-minhas-reservas">
      <h2 id="titulo-minhas-reservas">Minhas reservas</h2>
      <p>
        As reservas feitas neste navegador aparecem automaticamente. Para consultar uma reserva feita em
        outro dispositivo, use o código de confirmação recebido ao reservar.
      </p>

      <form className="reservation-lookup" onSubmit={handleLookup}>
        <div className="field">
          <label htmlFor="reservation-code">Código da reserva</label>
          <input
            id="reservation-code"
            name="reservation-code"
            type="text"
            value={code}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setCode(event.target.value)}
            placeholder="ex.: 6ab6f8de..."
          />
        </div>
        <button type="submit" className="button" disabled={lookupLoading}>
          {lookupLoading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      {lookupError && (
        <p className="field-error" role="alert">
          {lookupError}
        </p>
      )}

      <p className="menu-status" aria-live="polite">
        {status === "loading" && "Carregando reservas..."}
        {status === "empty" && "Nenhuma reserva salva neste navegador ainda."}
        {status === "error" && "Não foi possível carregar suas reservas."}
      </p>
      {status === "error" && (
        <button type="button" className="button" onClick={retry}>
          Tentar novamente
        </button>
      )}
      {cancelError && (
        <p className="field-error" role="alert">
          {cancelError}
        </p>
      )}

      {reservations.length > 0 && (
        <div className="my-reservations-list">
          {reservations.map(({ id, data }) => (
            <article key={id} className="reservation-card">
              <span className={`reservation-card-status reservation-card-status--${data.status}`}>
                {STATUS_LABEL[data.status]}
              </span>
              <h3>{data.name}</h3>
              <p>
                {formatDate(data.date)} às {data.time} · {data.people} pessoa(s)
              </p>
              {data.notes && <p>{data.notes}</p>}
              <p className="field-hint">Código: {id}</p>
              <div className="reservation-card-actions">
                {data.status === "cancelled" ? null : confirmingId === id ? (
                  <>
                    <button type="button" className="button button--danger" onClick={() => handleCancel(id)}>
                      Confirmar cancelamento
                    </button>
                    <button
                      type="button"
                      className="button button--ghost"
                      onClick={() => setConfirmingId(null)}
                    >
                      Manter reserva
                    </button>
                  </>
                ) : (
                  <button type="button" className="button button--ghost" onClick={() => setConfirmingId(id)}>
                    Cancelar reserva
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
