import { ArrowNarrowDownIcon } from "@heroicons/react/solid";

const Buttons = ({ btntext, className, btntextt }) => {
  return (
    <>
      <button
        className={`transition duration-700 ease-in-out px-4 py-2 justify-center ${className}`}
      >
        <span className="pr-2 font-light">{btntext}</span>
        <ArrowNarrowDownIcon className="animate-bounce ransition-all transform h-5 w-5" />
      </button>
    </>
  );
};
export default Buttons;
