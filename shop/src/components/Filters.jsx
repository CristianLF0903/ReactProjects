import { useState, useId } from "react";
import "../css/Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const { filter, setFilters } = useFilters();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price from</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${filter.minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>

        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="All" selected>
            All
          </option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
