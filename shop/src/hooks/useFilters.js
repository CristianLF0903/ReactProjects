import { useContext } from "react";
import { FilterContext } from "../context/filters.jsx";

export function useFilters() {
  // const [filter, setFilters] = useState({
  //   category: "All",
  //   minPrice: 0,
  // });

  const { filter, setFilters } = useContext(FilterContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === "All" || product.category === filter.category)
      );
    });
  };

  return { filter, filterProducts, setFilters };
}
