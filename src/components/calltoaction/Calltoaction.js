import Buttons from "./../Buttons";
import ctaImg from "../../images/cta-msg.svg";
const Bgcallcolor = {
  backgroundImage: "linear-gradient(90deg, #5445FB 2%, #26D5FD 100%)",
};
const Calltoaction = (props) => {
  return (
    <section className="pt-6 pb-6 flex justify-center" style={Bgcallcolor}>
      <div className="flex flex-row w-full max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="flex flex-col w-6/12 relative justify-self-center items-center">
          <h2 className="text-white font-light">
            Ready to get started? <br />
            Get in touch or create an account.
          </h2>
        </div>
        <div className="flex flex-col w-2/12 relative justify-center items-center">
          <img className="w-12 h-12" src={ctaImg} />
        </div>
        <div className="flex flex-col w-4/12 relative justify-center items-center">
          <Buttons
            className="w-full content-center mt-5 inline-flex items-center rounded-md shadow-lg bg-green-600 hover:bg-white text-white hover:text-green-500"
            btntext="CREATE ACCOUNT"
          />
          <Buttons
            className="w-full content-center mt-5 inline-flex items-center rounded-md shadow-lg bg-white hover:bg-green-500 text-grey-500 hover:text-white"
            btntext="CONTACT SALES"
          />
        </div>
      </div>
    </section>
  );
};

Calltoaction.propTypes = {};

export default Calltoaction;
