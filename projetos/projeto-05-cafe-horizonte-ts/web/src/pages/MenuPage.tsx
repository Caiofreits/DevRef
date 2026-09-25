import { useMemo } from "react";
import { useMenuItems } from "../hooks/useMenu";
import { MenuFilter } from "../components/MenuFilter";
import { MenuList } from "../components/MenuList";
import { useCafe } from "../context/CafeContext";

export function MenuPage() {
  const { category, setCategory } = useCafe();
  const { state, retry } = useMenuItems();
  const items = state.status === "success" ? state.data : [];

  const visibleItems = useMemo(
    () => (category === "all" ? items : items.filter((item) => item.category === category)),
    [items, category],
  );

  return (
    <section className="container section" id="menu" aria-labelledby="titulo-cardapio">
      <h2 id="titulo-cardapio">Cardápio em destaque</h2>
      <MenuFilter category={category} onChange={setCategory} />
      <p className="menu-status" aria-live="polite">
        {state.status === "loading" && "Carregando cardápio..."}
        {state.status === "error" && "Não foi possível carregar o cardápio."}
        {(state.status === "success" || state.status === "empty") &&
          (visibleItems.length === 0
            ? "Nenhum item encontrado nesta categoria."
            : `${visibleItems.length} ${visibleItems.length === 1 ? "item encontrado" : "itens encontrados"}.`)}
      </p>
      {(state.status === "success" || state.status === "empty") && <MenuList items={visibleItems} />}
      {state.status === "error" && (
        <button type="button" className="button" onClick={retry}>
          Tentar novamente
        </button>
      )}
    </section>
  );
}
