import About from "./HomeComponents/ui/About/About";
import CTA from "./HomeComponents/ui/CTA/CTA";
import Hero from "./HomeComponents/ui/Hero/Hero";
import Services from "./HomeComponents/ui/Services/Services";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About/>
      <CTA/>
    </>
  );
};
export default Home;