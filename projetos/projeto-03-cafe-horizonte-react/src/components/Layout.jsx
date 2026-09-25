import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCafe } from "../context/CafeContext";

export function Layout() {
  const { theme, toggleTheme } = useCafe();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="site-header container">
        <NavLink className="brand" to="/">
          Café Horizonte
        </NavLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((open) => !open)}
        >
          Menu
        </button>
        <nav id="site-nav" aria-label="Navegação principal" className={navOpen ? "is-open" : ""}>
          <NavLink to="/" end onClick={() => setNavOpen(false)}>
            Início
          </NavLink>
          <NavLink to="/cardapio" onClick={() => setNavOpen(false)}>
            Cardápio
          </NavLink>
          <NavLink to="/reservas" onClick={() => setNavOpen(false)}>
            Reservas
          </NavLink>
          <NavLink to="/minhas-reservas" onClick={() => setNavOpen(false)}>
            Minhas reservas
          </NavLink>
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Tema claro" : "Tema escuro"}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Café Horizonte &middot; Rua Exemplo, 100</p>
        </div>
      </footer>
    </>
  );
}
