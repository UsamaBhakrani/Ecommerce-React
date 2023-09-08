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
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
