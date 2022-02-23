import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

const Menu = () => {
  const { closeMenu } = useContext(MenuContext);
  return (
    <>
      <nav className="w-screen fixed z-[1000] top-8">
        <div className="flex-row-reverse max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex">
          <button
            onClick={closeMenu}
            className="z-[1000] shadow-md transition duration-700 ease-in-out px-4 py-2 rounded-full outline outline-blue-500 bg-blue-600 hover:bg-blue-700 outline-offset-0 text-sky-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="Menu fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full text-4xl font-bold focus:outline-none">
        <ul className="list-none">
          <a className="no-underline" onClick={closeMenu} href="#hero-sec">
            <li>HOME</li>
          </a>
          <a className="no-underline" onClick={closeMenu} href="#about-sec">
            <li>ABOUT</li>
          </a>
          <a className="no-underline" onClick={closeMenu} href="#why-sec">
            <li>WHY US</li>
          </a>
          <a className="no-underline" onClick={closeMenu} href="#client-sec">
            <li>OUR CLIENTS</li>
          </a>
          <a className="no-underline" onClick={closeMenu} href="#service-sec">
            <li>SERVICES</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Menu;
