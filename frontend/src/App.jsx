import React, { useState } from "react";
import { HomePage } from "./Components/HomePage";
import { Popup } from "./Components/Popup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-screen w-screen flex justify-center bg-gray-100">
      <div className="w-4/5 m-auto">
        <HomePage setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>
      {showPopup ? (
        <div className="absolute z-10 h-full w-full bg-[rgba(0,0,0,0.5)]">
          <Popup setShowPopup={setShowPopup} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
