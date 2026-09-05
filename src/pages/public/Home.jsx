import Hero from "../../components/home/Hero";
import PopularDestinations from "../../components/home/popularDestinations";
import Features from "../../components/home/Features";
import Offers from "../../components/home/Offers";
import Airlines from "../../components/home/Airlines";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
        <Features />
         <Offers />
          <Airlines />
          <Testimonials />
          <Newsletter />

    </>
  );
}

export default Home;