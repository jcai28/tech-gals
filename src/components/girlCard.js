import React from 'react';

const GirlCard = ({ girl }) => {
  let infoLines = ["food", "security", "education", "health"];
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 max-w-md mx-auto">
      <div className="flex justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full">
          <img className="object-cover w-full h-full" src={girl.img} alt="Profile" />
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">{girl.name}</h1>
        <hr className="my-2"></hr>
        <p className="text-gray-600">Want to be {girl.dream}</p>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">1 Year</h1>
        {infoLines.map((line, index) => (
          <p key={index} className="text-gray-700">{line}</p>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="bg-white border border-black text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300">
          Support {girl.name}
        </button>
      </div>
    </div>
  );
};

export default GirlCard;


