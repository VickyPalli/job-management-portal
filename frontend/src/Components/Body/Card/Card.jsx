import React from "react";
import Logo from "../../../assets/amazonLogo.svg";

export const Card = ({ title, salary, jobtype, description, createdAt }) => {
  // Function to calculate time ago
  const timeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // If within the last 24 hours, show hours
    if (diffInHours < 24) {
      return `${diffInHours}h Ago`;
    }

    // If more than 24 hours ago, show days
    return `${diffInDays} days Ago`;
  };

  return (
    <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-4 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="w-20 h-20 shadow-[inset_0px_4px_19px_0px_rgba(236,_72,_153,_0.15)] flex p-2 rounded-xl items-center justify-center">
            <img className="w-full h-full" src={Logo} />
          </div>
          <span className="text-[#8a4b4b] text-[14px] bg-[#b0d9ff] px-4 py-2 rounded-xl">
            {timeAgo(createdAt)}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-2">{title}</h2>

        <div className="flex flex-wrap items-center gap-1.5 text-sm pr-8 text-gray-600 mt-1">
          <span className="flex gap-2 items-center">
            <svg
              width="16"
              height="14"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z"
                stroke="#5A5A5A"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            1-3 yr Exp
          </span>
          <span className="flex gap-2 items-center">
            <svg
              width="16"
              height="14"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637"
                stroke="#5A5A5A"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {jobtype}
          </span>
          <span className="flex gap-2 items-center">
            <svg
              width="16"
              height="14"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1728 10.0001L8.99096 15.4546L0.809143 10.0001M17.1728 13.6365L8.99096 19.091L0.809143 13.6365M17.1728 6.36373L8.99096 11.8183L0.809143 6.36373L8.99096 0.90918L17.1728 6.36373Z"
                stroke="#5A5A5A"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {salary} LPA
          </span>
        </div>

        <div className="text-sm text-gray-600 mt-3 space-y-1 list-disc list-inside">
          {description}
        </div>
      </div>
      <div>
        <button className="w-full cursor-pointer bg-[#00aaff] text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};
