const CATEGORIES = [
  { value: "all", label: "Todos" },
  { value: "bebidas", label: "Bebidas" },
  { value: "doces", label: "Doces" },
];

export function MenuFilter({ category, onChange }) {
  return (
    <div className="menu-filters" role="group" aria-label="Filtrar cardápio">
      {CATEGORIES.map((option) => (
        <button
          key={option.value}
          type="button"
          className="filter-button"
          aria-pressed={category === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
