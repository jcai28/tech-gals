import "./DonationBar.css";
import ArrowSlider from "./ArrowSlider"
import CustomizedCard from "./CustomizedCard"

export default function DonationBar() {
  const sample_girls = [
    {
      name: "Ponnu",
      age:"4-16 years (typical)",
      duration: "ongoing",
      cover: "Includes: housing, food, security, basic healthcare",
      dream: "Police",
      img: "girl3.jpg",
      price: 34,
      type: "THE ORPHANAGE"
    },
    {
      name: "Raja",
      age:"16-18 years (typical)",
      duration: "Average 1-3 year duration",
      cover: "Includes: housing, food, security, basic healthcare",
      dream: "Beautician ",
      img: "girl1.jpg",
      price: 117,
      type: "VOCATIONAL TRAINING"
    },
    {
      name: "Sruthi",
      age:"18-24 years (typical)",
      duration: "Average 3-6 year duration",
      cover: "Includes: housing, food, security, basic healthcare",
      dream: "Agriculture Officer",
      img: "girl2.jpg",
      price: 125, 
      type: "HIGHER EDUCATION"
    },
    // Add more girls as needed
  ];

  return (
    <div className='donation-bar'>
      <ArrowSlider girlsData={sample_girls}/>
      <CustomizedCard/>
    </div>
  )
}