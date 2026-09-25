import { useMemo } from "react";
import { useMenuItems } from "../hooks/useMenu";
import { MenuFilter } from "../components/MenuFilter";
import { MenuList } from "../components/MenuList";
import { useCafe } from "../context/CafeContext";

export function MenuPage() {
  const { category, setCategory } = useCafe();
  const { items, status, retry } = useMenuItems();

  const visibleItems = useMemo(
    () => (category === "all" ? items : items.filter((item) => item.category === category)),
    [items, category],
  );

  return (
    <section className="container section" id="menu" aria-labelledby="titulo-cardapio">
      <h2 id="titulo-cardapio">Cardápio em destaque</h2>
      <MenuFilter category={category} onChange={setCategory} />
      <p className="menu-status" aria-live="polite">
        {status === "loading" && "Carregando cardápio..."}
        {status === "error" && "Não foi possível carregar o cardápio."}
        {(status === "success" || status === "empty") &&
          (visibleItems.length === 0
            ? "Nenhum item encontrado nesta categoria."
            : `${visibleItems.length} ${visibleItems.length === 1 ? "item encontrado" : "itens encontrados"}.`)}
      </p>
      {(status === "success" || status === "empty") && <MenuList items={visibleItems} />}
      {status === "error" && (
        <button type="button" className="button" onClick={retry}>
          Tentar novamente
        </button>
      )}
    </section>
  );
}
