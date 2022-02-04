import Card from "./about-sections/Card";
import aboutHeadimg from "./../images/about-head-img.svg";
const About = () => {
  return (
    <section className="mt-32 mb-32 flex-row justify-center max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="justify-center flex items-center">
        <img className="h-10 w-15 m-0" src={aboutHeadimg} />
        <span className="text-4xl font-light uppercase leading-normal text-gray-800 flex-row ">
          About
        </span>
      </div>
      <div className="justify-center flex gap-8 mt-8">
        <Card />
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;
