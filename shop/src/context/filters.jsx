import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FiltersProvider({ children }) {
  const [filter, setFilters] = useState({
    category: "All",
    minPrice: 0,
  });

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
