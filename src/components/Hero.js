import Heroleft from "./Heroleft";
import Heroright from "./Heroright";

const Hero = () => {
  return (
    <div className="w-screen hero-sec hero-bg h-screen" id="hero-sec">
      <div className="flex justify-center  max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="grid grid-rows-3 md:grid-cols-2 h-screen mt-12">
          <Heroleft />
          <Heroright />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
