import { styled } from "styled-components";
import { useCartContext } from "../context/cart_context";
import { CartContent, Hero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  console.log(cart)
  return <div>CartPage</div>;
};

const Wrapper = styled.main`
  .empty {
    text-align: center;

    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
