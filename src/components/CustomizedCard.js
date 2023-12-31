import { useState } from "react";
import "./CustomizedCard.css"
const CustomizedCard = ({ curAmount, setAmount }) => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleButtonClick = (amount) => {
    if (amount === "Custom") {
      // Handle custom logic
    } else {
      setSelectedAmount(parseInt(amount, 10));
    }
  };

  const handleMakeChangeClick = () => {
    // Update the amount with the selected amount when "MAKE A CHANGE" is clicked
    setAmount(curAmount + selectedAmount);
    // Reset the selected amount to 0
    setSelectedAmount(0);
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden p-6 max-w-xs mx-auto" style={{border: "1px solid #C2D1D9"}}>
      <div className="text-center m-2">
        <h2 className="text-gray-800 font-semibold text-xl lg:text-2xl mb-4">Custom Donation</h2>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button onClick={() => handleButtonClick(25)} className={`money px-2 py-2 rounded-md  transition-all duration-300 focus:outline-none ${selectedAmount === 25 ? 'selected' : ''}`}>
            $25
          </button>
          <button onClick={() => handleButtonClick(50)} className={`money px-2 py-2 rounded-md  transition-all duration-300 focus:outline-none ${selectedAmount === 50 ? 'selected' : ''}`}>
            $50
          </button>
          <button onClick={() => handleButtonClick(200)} className={`money px-2 py-2 rounded-md  transition-all duration-300 focus:outline-none ${selectedAmount === 200 ? 'selected' : ''}`}>
            $200
          </button>
          <button className="money px-1 py-2 rounded-md  transition-all duration-300 focus:outline-none">
            Custom
          </button>
        </div>
        
        <hr className="my-2 w-full" />

        
      </div>
      <p className="text-gray-700 mt-4 p-3">
          Your donation will contribute towards housing, food, security, and basic healthcare for the girls at Nalam.
        </p>

      <div className="mt-6 text-center">
        <button onClick={handleMakeChangeClick} className="bg-white text-black border border-black px-6 py-3 rounded-md transition-all duration-300 focus:outline-none">
          MAKE A CHANGE
        </button>
      </div>
    </div>
  );
};

export default CustomizedCard;
