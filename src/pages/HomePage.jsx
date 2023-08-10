import { Services, HomeHero, Contact, FeaturedProducts } from "../components";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
