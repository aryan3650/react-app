import clientHeadimg from "./../../images/client-head-img.svg";
import logoClient from "../../images/logo-client.png";
const Clients = () => {
  return (
    <section
      id="client-sec"
      className="mt-32 mb-32 flex-row justify-center max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div className="justify-center flex items-center">
        <img className="h-10 w-15 m-0" src={clientHeadimg} />
        <span className="ml-3 text-4xl font-light uppercase leading-normal text-gray-800 flex-row">
          OUR Clients
        </span>
      </div>
      <div className="justify-center flex items-center">
        <img className="mt-10 w-full m-0" src={logoClient} />
      </div>
    </section>
  );
};

export default Clients;
