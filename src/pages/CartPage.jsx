import { styled } from "styled-components";
import { useCartContext } from "../context/cart_context";
import { CartContent, Hero } from "../components";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your Cart is Empty</h2>
          <Link to="/products" className="btn">
            Fill It
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Hero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
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
