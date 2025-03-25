import React, { useState } from "react";

export const DoubleRangeSlider = () => {
  const [minSalary, setMinSalary] = useState(50000);
  const [maxSalary, setMaxSalary] = useState(80000);

  const minLimit = 10000;
  const maxLimit = 100000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxSalary - 1000);
    setMinSalary(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minSalary + 1000);
    setMaxSalary(value);
  };

  const minPercent = ((minSalary - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxSalary - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="w-full h-full px-4">
      <div className="relative w-full h-[2px]">
        <div className="absolute w-full h-[2px] bg-gray-200 rounded-lg"></div>

        <div
          className="absolute h-[2px] bg-purple-500 rounded-lg"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        ></div>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minSalary}
          onChange={handleMinChange}
          className="absolute w-full h-[2px] bg-transparent appearance-none cursor-pointer z-10"
          style={{ zIndex: minSalary > maxSalary - 1000 ? 20 : 10 }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxSalary}
          onChange={handleMaxChange}
          className="absolute w-full h-[2px] bg-transparent appearance-none cursor-pointer z-10"
          style={{ zIndex: maxSalary < minSalary + 1000 ? 20 : 10 }}
        />
      </div>
    </div>
  );
};

export default DoubleRangeSlider;
