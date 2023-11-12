import React, { useState } from 'react';
import GirlCard from './GirlCard'; // Adjust the path based on your project structure

const ArrowSlider = ({ girlsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? girlsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === girlsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-xs mx-auto relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl px-4 py-2"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <div className="mx-4">
        <GirlCard girl={girlsData[currentIndex]} />
      </div>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl px-4 py-2"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default ArrowSlider;

