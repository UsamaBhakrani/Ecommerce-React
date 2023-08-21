import { useState } from "react";
import { styled } from "styled-components";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors :</span>
        <div>
          {colors.map((color, index) => {
            return <button key={crypto.randomUUID()}>{color}</button>;
          })}
        </div>
      </div>
      <div className="btn-container"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default AddToCart;
