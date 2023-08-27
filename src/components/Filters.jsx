import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  const {} = useFilterContext();

  return <Wrapper>Filters</Wrapper>;
};

const Wrapper = styled.section``;

export default Filters;
