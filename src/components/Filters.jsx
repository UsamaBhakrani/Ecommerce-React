import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: {
      search,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  console.log(colors);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="search"
              placeholder="search"
              className="search-input"
              value={search}
              onChange={updateFilters}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Filters;
