import type { CategoryFilter } from "../types";

const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "bebidas", label: "Bebidas" },
  { value: "doces", label: "Doces" },
];

type MenuFilterProps = {
  category: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
};

export function MenuFilter({ category, onChange }: MenuFilterProps) {
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
