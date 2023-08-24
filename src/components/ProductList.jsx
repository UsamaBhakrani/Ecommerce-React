import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { GridView, ListView } from "../components";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  return <GridView products={products}>ProductList</GridView>;
};

export default ProductList;
