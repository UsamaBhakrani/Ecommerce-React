import { styled } from "styled-components";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import HeroTwo from "../assets/hero2.jpeg";

const AboutPage = () => {
  return (
    <main>
      <Hero title="About" />
      <Wrapper className="page section section-center">
        <img src={HeroTwo} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            consequuntur consectetur! Dolorum earum ipsam accusamus eveniet quos
            hic? At reprehenderit laborum quibusdam ut asperiores nesciunt et
            itaque maxime vero dolorum, dignissimos odit, delectus ab culpa
            sapiente deserunt qui consectetur quia error? Temporibus nihil nobis
            eum ad, quia veritatis alias id!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            culpa, nihil praesentium dolorum molestias, illo et tempora
            distinctio sint quaerat fuga aut reprehenderit odit quo voluptatem
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
