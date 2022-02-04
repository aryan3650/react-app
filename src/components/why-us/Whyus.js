import whySectionbg from "../../images/why-bg.svg";
import Whyleft from "./Whyleft";
import Whyright from "./Whyright";
const Whyus = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${whySectionbg})`,
        backgroundSize: "Cover",
      }}
      className="mt-32 mb-32 flex-row px-6 mx-auto sm:px-0 w-full pt-40 pb-28"
    >
      <div className="justify-center flex max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <Whyleft />
        <Whyright />
      </div>
    </section>
  );
};

export default Whyus;
