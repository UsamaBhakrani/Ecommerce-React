import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { styled } from "styled-components";
import { AmountButtons } from "../components";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default CartItem;
