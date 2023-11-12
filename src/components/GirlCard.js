import React from 'react';

const GirlCard = ({ girl, curAmount, setAmount }) => {
  let infoLines = [girl.age, girl.duration, girl.cover];
  const handleSupportClick = () => {
    // Subtract 50 from the current amount
    const updatedAmount = curAmount + girl.price*12;

    // Call the setAmount function passed from the parent with the updated amount
    setAmount(updatedAmount);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden p-4 max-w-md" style={{border: "1px solid #C2D1D9", marginBottom: "1rem"}}>
      <div className="flex justify-center mb-4">
        <div className="w-20 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full">
          <img className="object-cover w-full h-full" src={girl.img} alt="Profile" />
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">{girl.name}</h1>
        <hr className="my-2"></hr>
        <p className="text-gray-600">"I want to be a {girl.dream} when I grow up”</p>
      </div>
      <div className="text-center mt-4">
        <div className="info-container mb-3">
          <h1 className="text-gray-800 font-semibold text-4xl md:text-5xl lg:text-6xl mb-4">${girl.price} <span className='text-sm'>USD/Month</span></h1>
          <div className="px-6 py-3">
          {infoLines.map((line, index) => (
            <p key={index} className="text-gray-700 mb-2 text-start">{line}</p>
          ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={handleSupportClick} className="text-white mx-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-300" style={{ backgroundColor: "#25348F" }}>
          SUPPORT {girl.type}
        </button>
      </div>
    </div>
  );
};

export default GirlCard;



