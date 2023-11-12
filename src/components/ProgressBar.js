import React, { useState, useEffect } from "react";

const ProgressBar = ({ amount, total }) => {
  const [progress, setProgress] = useState(0);
  const [curTotal, setTotal] = useState(total);
  useEffect(() => {
    let percentage = (amount/curTotal*100).toFixed(2)
    const validPercentage = Math.min(100, Math.max(0, percentage));
    setProgress(validPercentage);
  }, [amount, curTotal, total]);
  
  return (
    <div className="container">
      
      <div className="m-3 text-center relative">
        <div className="h-10 border rounded-full overflow-hidden bg-gray-200 relative" style={{height: "20px"}}>
          <div
            className="h-full bg-green-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* <h1 className="text-right">{curTotal}</h1> */}
    </div>
  );
};

export default ProgressBar;
