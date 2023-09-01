import { useState } from "react";
import { styled } from "styled-components";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // Increase Quantity Functionality in Cart Button
  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

    // Decrease Quantity Functionality in Cart Button
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors :</span>
        <div>
          {colors.map((color) => {
            return (
              <button
                key={crypto.randomUUID()}
                className={
                  mainColor === color ? "color-btn active" : "color-btn"
                }
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          decrease={decreaseAmount}
          increase={increaseAmount}
        />
        <Link to={"/cart"} className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;

  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;

    span {
      text-transform: capitalize;
      font-weight: 700;
    }

    div {
      display: flex;
    }
  }

  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
