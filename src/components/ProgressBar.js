import React, { useState, useEffect } from "react";

const ProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const validPercentage = Math.min(100, Math.max(0, percentage));
    setProgress(validPercentage);
  }, [percentage]);
  const textPosition = {
    marginLeft: `${progress - 2}%`, // Adjust as needed
  };

  return (
    <div className="container">
      <div className="text-lg font-bold mt-2 " style={textPosition}>
        {`${progress}%`}
      </div>
      <div className="m-3 text-center relative">
        <div className="h-10 border rounded-full overflow-hidden bg-gray-200 relative" style={{height: "20px"}}>
          <div
            className="h-full bg-green-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <h1 className="text-right">211,000</h1>
    </div>
  );
};

export default ProgressBar;
