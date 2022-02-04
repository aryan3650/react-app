import serviceHeadimg from "../../images/service-head-img.svg";
import serviceSectionbg from "../../images/service-bg-img.svg";
import Card from "./Cards";
const Service = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${serviceSectionbg})`,
        backgroundSize: "Cover",
      }}
      className="mt-32 flex-row px-6 mx-auto sm:px-0 w-full pt-40 pb-28"
    >
      <div className="justify-center flex items-center">
        <img className="h-10 w-15 m-0" src={serviceHeadimg} />
        <span className="text-4xl font-light uppercase leading-normal text-gray-800 flex-row ">
          Our Services
        </span>
      </div>
      <div className="flex flex-row w-full max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="relative grid grid-cols-1 gap-x-28 gap-y-12 mt-16 sm:grid-cols-2 lg:grid-cols-2">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Service;
