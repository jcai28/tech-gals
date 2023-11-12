import React from 'react';

const GirlCard = ({ girl }) => {
  girl = {
    name: "Iswarya Anandan",
    story:
      "In the heart of Delhi, a radiant soul named Iswarya Anandan brightened the lives of those around her. Her journey began in an orphanage where dreams were nurtured, and Iswarya's dreams soared as high as the Himalayan peaks visible in the distance. Her infectious laughter echoed through the corridors, weaving tales of bravery and enchantment that captivated her fellow orphans. Encouraged by a compassionate teacher, Iswarya stepped into the limelight, participating in a city storytelling competition. Her narrative, a testament to the resilience of her companions, won not just the competition but also the hearts of the community. An outpouring of support followed, shining a light on the untapped potential within every child. Iswarya's journey, defined by love and storytelling, became an inspiration, proving that even in the humblest of places, the spirit can flourish.",
    birth_date: new Date("11/29/2006"),
    orphan_year: 2014,
    img: "girl1.jpg",
    donor: null, // To be updated with donor ID if applicable
  }
  let infoLines = ["food", "security", "education", "health"]
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 max-w-xs mx-auto">
      <div className="flex justify-center">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <img className="object-cover w-full h-full" src={girl.img} alt="Profile" />
        </div>
      </div>
      <div className="text-center">
          <h1 className="text-gray-800 font-semibold">{girl.name}</h1>
          <hr></hr>
          <p>Want to be Police</p>
        </div>
      <div className="mt-4 text-center">
        {infoLines.map((line, index) => (
          <p key={index} className="text-gray-700">{line}</p>
        ))}
      </div >
      <div className="mt-4 text-center">
      <button className="bg-white border border-black text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300">
          Support {girl.name}
        </button>
      </div>
    </div>
  );
};

export default GirlCard;

