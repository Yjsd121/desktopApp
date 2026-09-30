import "./SearchFilter.css";
import type { ListFilters } from "../../Types/type";
import type React from "react";
interface SearchFilterProps {
  filters: ListFilters;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SearchFilter({ filters, setOpenModal }: SearchFilterProps) {
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
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          + Nuevo producto{" "}
        </button>
      </div>
    </section>
  );
}
