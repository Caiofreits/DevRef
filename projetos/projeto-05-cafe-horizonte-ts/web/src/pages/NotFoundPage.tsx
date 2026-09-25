import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="container not-found">
      <h2>Página não encontrada</h2>
      <p>O endereço acessado não existe ou foi movido.</p>
      <Link className="button" to="/">
        Voltar para o início
      </Link>
    </section>
  );
}
