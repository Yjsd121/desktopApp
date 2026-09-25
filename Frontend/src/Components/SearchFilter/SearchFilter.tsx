import "./SearchFilter.css";
import type { ListFilters } from "../../Types/type";
interface SearchFilterProps {
  filters: ListFilters;
}
export function SearchFilter({ filters }: SearchFilterProps) {
  return (
    <section className="SearchFilters-container">
      <input />
      <div className="filters-Side">
        {filters.map((filter) => (
          <select key={filter.name}>
            {filter.options.map((options) => (
              <option key={options.key}>{options.option}</option>
            ))}
          </select>
        ))}
        <button>+ Nuevo producto </button>
      </div>
    </section>
  );
}
