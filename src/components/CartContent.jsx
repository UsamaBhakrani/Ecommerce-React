import { styled } from "styled-components";
import { useCartContext } from "../context/cart_context";
import { CartColumn, CartTotal, CartItem } from "../components";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <Wrapper className="section section-center">
      <CartColumn />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export default CartContent;
