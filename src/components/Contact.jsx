import { styled } from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our NewsLetter</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            provident illo perferendis esse nobis asperiores maiores sequi
            deleniti aut debitis!
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="peter@gmail.com"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
