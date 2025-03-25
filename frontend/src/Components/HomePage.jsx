import React from "react";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Interactions } from "./Interactions/Interactions";

export const HomePage = ({ setShowPopup, showPopup }) => {
  return (
    <div className="h-screen relative w-full flex flex-col">
      <div className="h-[15%] w-full flex items-center justify-center">
        <Header setShowPopup={setShowPopup} />
      </div>
      <div className="h-[10%] w-full">
        <Interactions />
      </div>
      <div className="mt-5">
        <Body showPopup={showPopup} />
      </div>
    </div>
  );
};
