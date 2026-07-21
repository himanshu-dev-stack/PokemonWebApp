import React from "react";

  const statusCheck = (value) => {
    if (value > 70) return "bg-green-500";
    if (value > 40) return "bg-yellow-500";
    if (value > 10) return "bg-red-500";
    if(value > 0) return "bg-gray-500";
    return null;
  };

const ProgressBar = ({ value }) => {

  return (
    <div className="flex items-center gap-3 w-full max-w-xs">
      
      {/* Percentage Text */}
      <span className="text-white text-lg">
        {value}
      </span>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-black border-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${statusCheck(value)} rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>

    </div>
  );
};

export default ProgressBar;