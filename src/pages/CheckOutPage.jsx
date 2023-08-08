import { styled } from "styled-components";
import { Hero } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <Hero title="Checkout" />
      <Wrapper className="page">
        <h2>CheckOut Here</h2>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default CheckoutPage;
