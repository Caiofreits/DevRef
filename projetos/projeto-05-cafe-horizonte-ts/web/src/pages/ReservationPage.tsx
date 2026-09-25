import { ReservationForm } from "../components/ReservationForm";

export function ReservationPage() {
  return (
    <section className="container section" id="contact" aria-labelledby="titulo-contato">
      <h2 id="titulo-contato">Contato e reservas</h2>
      <ReservationForm />
      <address>
        Rua Exemplo, 100 &middot; Café Horizonte
        <br />
        Horário: terça a domingo, 8h às 18h
      </address>
    </section>
  );
}
