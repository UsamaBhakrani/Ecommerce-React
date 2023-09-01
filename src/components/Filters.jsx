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

  // Utitlizing helper function named getUniqueValues to get Unique Categories for Filter Functionality
  const categories = getUniqueValues(all_products, "category");

  // Utitlizing helper function named getUniqueValues to get Unique Companies for Filter Functionality
  const companies = getUniqueValues(all_products, "company");

  // Utitlizing helper function named getUniqueValues to get Unique Colors for Filter Functionality
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Start of Search Input */}
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
          {/* End of Search Input */}

          {/* Start of Category Filters */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c) => {
                return (
                  <button
                    key={c}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={c.toLowerCase() === category ? "active" : null}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End of Category Filters */}

          {/* Start of Comapany Filter */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c) => {
                return (
                  <option value={c} key={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* End of Category Filters */}

          {/* Start of Colors Filters */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c) => {
                if (c === "all") {
                  return (
                    <button
                      key={c}
                      onClick={updateFilters}
                      className={color === "all" ? "all-btn active" : "all-btn"}
                      name="color"
                      data-color="all"
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={c}
                    name="color"
                    style={{ background: c }}
                    className={color === c ? "color-btn active" : "color-btn"}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End of Colors Filters */}

          {/* Start of Price Slider Filter */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* End of Price Slider Filter */}

          {/* Start of Free Shipping Checkbox Filter */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End of Free Shipping Checkbox Filter */}
        </form>

        {/* Clear Filters Functionality */}
        <button className="clear-btn" type="button" onClick={clearFilters}>
          clear filters
        </button>
        {/* Clear Filters Functionality */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
