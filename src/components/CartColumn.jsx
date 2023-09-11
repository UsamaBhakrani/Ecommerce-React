import { styled } from "styled-components";

const CartColumn = () => {
  return <Wrapper>CartColumn</Wrapper>;
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 776px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
  }
`;

export default CartColumn;
