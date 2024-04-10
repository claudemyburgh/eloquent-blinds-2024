import React from "react";

const ProgressBar = ({percentage}: any) => {
  return (
    <>
      {percentage > 0 && (
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-6 my-4 relative overflow-hidden">
          <div
            className="relative bg-primary-500 -left-full transition text-xs font-medium text-primary-100 text-center h-6 leading-none rounded-full"
            style={{
              transform: `translateX(${percentage}%)`,
            }}
          ></div>
          <div
            className={`absolute flex items-center justify-center inset-0 z-10 text-center`}
          >
            {percentage}%
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
