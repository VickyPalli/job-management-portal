import React from "react";
import MainLogo from "../../assets/mainLogo.svg";

export const Header = ({ setShowPopup }) => {
  return (
    <div className="w-[70%] h-[90px] flex justify-between items-center rounded-[60px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white px-6">
      <div className="h-full flex items-center justify-center w-[10%]">
        <img src={MainLogo} alt="Main Logo" className="h-[60%] aspect-square" />
      </div>

      <div className="flex w-[75%] justify-evenly text-gray-700 font-medium">
        <a href="#" className="hover:text-purple-600">
          Home
        </a>
        <a href="#" className="hover:text-purple-600">
          Find Jobs
        </a>
        <a href="#" className="hover:text-purple-600">
          Find Talents
        </a>
        <a href="#" className="hover:text-purple-600">
          About us
        </a>
        <a href="#" className="hover:text-purple-600">
          Testimonials
        </a>
      </div>

      <div className="h-full flex w-[15%] justify-center items-center">
        <button
          onClick={() => {
            setShowPopup(true);
          }}
          className="w-fit px-6 py-2 cursor-pointer rounded-[32px] whitespace-nowrap bg-[#9823f4] text-white hover:bg-purple-700 transition"
        >
          Create Jobs
        </button>
      </div>
    </div>
  );
};
