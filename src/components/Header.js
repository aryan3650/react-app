import React, { useState, useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
const Header = () => {
  const { toggleMenu, closeMenu } = useContext(MenuContext);
  const [isiOpen, setisOpen] = useState(false);
  console.log(toggleMenu);
  return (
    <>
      <nav className="w-screen fixed z-[10] top-8">
        <div className="flex-row-reverse max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex">
          <button
            onClick={() => {
              toggleMenu();
              setisOpen(!isiOpen);
            }}
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
