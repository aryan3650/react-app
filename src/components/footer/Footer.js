import footerbg from "../../images/footer-bg-img.svg";

const listStyle = {
  listStyle: "none",
  padding: "0px",
};
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "Cover",
      }}
      className=" mt-0.5 flex-row flex px-6 mx-auto sm:px-0 w-full pt-40 pb-28"
    >
      <div className="flex flex-row w-full max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="flex flex-col w-4/12 ">
          <div className="w-4/12 gap-4">
            <h1 className="uppercase text-grey-600 font-light">XEON</h1>
          </div>
        </div>
        <div className="flex flex-col w-4/12 ">
          <div className="w-4/12 gap-4">
            <h1 className="uppercase text-grey-600 font-extralight text-base">
              PRODUCTS
            </h1>
            <ul className="font-extralight text-sm" style={listStyle}>
              <li>Payments</li>
              <li>Billing</li>
              <li>Connect</li>
              <li>Sigma</li>
              <li>Atlas</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-4/12 ">
          <div className="w-4/12 gap-4">
            <h1 className="uppercase text-grey-600 font-extralight text-base">
              RESOURCES
            </h1>
            <ul className="font-extralight text-sm" style={listStyle}>
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy & terms</li>
              <li>Site map</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
