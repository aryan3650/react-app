import cardImage1 from "../../images/about-1.svg";
import cardImage2 from "../../images/about-2.svg";
import cardImage3 from "../../images/about-3.svg";

const Card = () => {
  return (
    <>
      <div className="cursor-pointer flex flex-col w-4/12 bg-white rounded shadow py-4 px-6 h-full transform transition-all hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-col">
          <img className="pl-10 pr-10 m-0  h-24" src={cardImage1} />
          <h3 className="text-center font-light">24/7 SUPPORT</h3>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col w-4/12 bg-white rounded shadow py-4 px-6 h-full transition-all transform hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-col">
          <img className="pl-10 pr-10 m-0 h-24" src={cardImage2} />
          <h3 className="text-center font-light">SECURE GATEWAY</h3>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col w-4/12 bg-white rounded shadow py-4 px-6 h-full transition-all transform hover:shadow-lg focus-within:scale-110 focus-within:shadow-lg">
        <div className="flex flex-col">
          <img className="pl-10 pr-10 m-0  h-24" src={cardImage3} />
          <h3 className="text-center font-light">PAYMENT PROTECTION</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
