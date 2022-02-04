import Hero from "./Hero";
import About from "./About";
import Whyus from "./why-us/Whyus";
import Clients from "./client/Clients";
import Calltoaction from "./calltoaction/Calltoaction";
import Services from "./service/Service";
import Footer from "./footer/Footer";
const Main = () => {
  return (
    <div className="mx-auto w-screen">
      <Hero />
      <About />
      <Whyus />
      <Clients />
      <Calltoaction />
      <Services />
      <Footer />
    </div>
  );
};

export default Main;
