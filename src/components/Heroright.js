import Buttons from "./Buttons";

const Heroright = (props) => {
  return (
    <>
      <div className="text-base leading-normal text-white flex flex-col mt-6 md:items-start md:row-start-2 md:col-start-2 md:self-center md:mt-0">
        <div className="font-normal prose prose-stone text-3xl leading-normal text-white flex flex-col mt-6 md:items-start md:row-start-2 md:col-start-2 md:mt-0">
          Hey There! 👋
        </div>
        <div className="font-light text-base text-white flex flex-col mt-6 md:items-start md:row-start-2 md:col-start-2 md:mt-0">
          This is a community effort to create roadmaps, guides and other
          educational content to help guide the developers in picking up the
          path and guide their learnings.
          <Buttons
            className="w-full uppercase content-center mt-5 inline-flex items-center rounded-md shadow-lg bg-green-600 hover:bg-white text-white hover:text-green-500"
            btntext="Scroll to see more"
          />
        </div>
      </div>
    </>
  );
};

Heroright.propTypes = {};

export default Heroright;
