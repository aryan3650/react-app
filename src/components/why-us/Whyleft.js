import Whylamp from "../../images/why-lamp.svg";
const Whyleft = () => {
  return (
    <section className="flex flex-col w-6/12 pt-10">
      <div className="justify-center flex-row items-center">
        <span className="text-4xl font-bold leading-normal text-gray-800 flex justify-center">
          <span className="mr-4 font-light uppercase">Why Us?</span>
          <img className="h-10 w-15 m-0" src={Whylamp} />
        </span>
        <p className="flex flex-row font-light">
          Stripe builds the most powerful and flexible tools for internet
          commerce. Whether you’re creating a subscription service, an on-demand
          marketplace, an e-commerce store, or a crowdfunding platform, Stripe’s
          meticulously designed APIs and unmatched functionality help you create
          the best possible product for your users. Millions of the world’s most
          innovative technology companies are scaling faster and more
          efficiently by building their businesses on Stripe.
        </p>
      </div>
    </section>
  );
};

export default Whyleft;
