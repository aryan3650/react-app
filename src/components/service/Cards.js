import ser1 from "../../images/ser-1.svg";
import ser2 from "../../images/ser-2.svg";
import ser3 from "../../images/ser-3.svg";
import ser4 from "../../images/ser-4.svg";
const Cards = () => {
  return (
    <>
      <div className="cursor-pointer flex flex-col bg-white rounded shadow px-6 h-full transform transition-all hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col mr-5">
            <img className="h-24 w-24 m-0" src={ser1} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-left font-light text-blue-700 mt-3 mb-3 text-lg">
              Introducing Sigma
            </h3>
            <p className="font-light text-sm">
              Use SQL to explore your business’ payments and revenue data, build
              and run custom reports, get insights, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col bg-white rounded shadow px-6 h-full transform transition-all hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col mr-5">
            <img className="h-24 w-24 m-0" src={ser2} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-left font-light text-blue-700 mt-3 mb-3 text-lg">
              Explore the Docs
            </h3>
            <p className="font-light text-sm">
              Start building your integration and accept your first payment in
              minutes. Stripe libraries are available in every language from
              Ruby to Go.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col bg-white rounded shadow px-6 h-full transform transition-all hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col mr-5">
            <img className="h-24 w-24 m-0" src={ser3} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-left font-light text-blue-700 mt-3 mb-3 text-lg">
              Always Improving
            </h3>
            <p className="font-light text-sm">
              Stripe is an always-improving toolchain that gains new features
              every month. Our world-class engineering team..
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col bg-white rounded shadow px-6 h-full transform transition-all hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col mr-5">
            <img className="h-24 w-24 m-0" src={ser4} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-left font-light text-blue-700 mt-3 mb-3 text-lg">
              Global Scale
            </h3>
            <p className="font-light text-sm">
              We help power millions of businesses in 100+ countries and across
              nearly every industry. Headquartered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
