import { Link } from "react-router-dom";
import { useMenuItems } from "../hooks/useMenu";
import { MenuList } from "../components/MenuList";

export function HomePage() {
  const { items, status, retry } = useMenuItems();
  const suggestions = items.slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Café local desde 2018</p>
          <h1>Uma pausa boa no meio do dia</h1>
          <p>Grãos selecionados, preparo cuidadoso e um lugar tranquilo.</p>
          <Link className="button" to="/cardapio">
            Conhecer o cardápio
          </Link>
        </div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container">
          <h2>Sobre o café</h2>
          <p>Trabalhamos com produtores locais e mudamos os grãos ao longo do ano.</p>
          <img src="img/fachada.avif" alt="Fachada do Café Horizonte com mesas na calçada" />
        </div>
      </section>

      <section className="container section" id="suggestions" aria-labelledby="titulo-sugestoes">
        <h2 id="titulo-sugestoes">Sugestões do dia</h2>
        <p className="menu-status" aria-live="polite">
          {status === "loading" && "Carregando sugestões..."}
          {status === "empty" && "Nenhuma sugestão disponível hoje."}
          {status === "error" && "Não foi possível carregar as sugestões."}
          {status === "success" && `${suggestions.length} sugestões encontradas.`}
        </p>
        {status === "success" && <MenuList items={suggestions} />}
        {status === "error" && (
          <button type="button" className="button" onClick={retry}>
            Tentar novamente
          </button>
        )}
      </section>
    </>
  );
}
