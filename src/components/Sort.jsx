import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={grid_view ? "active" : null}>
          <BsFillGridFill />
        </button>
        <button type="button">
          <BsList className={!grid_view ? "active" : null} />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Sort;
