import "./App.css";
import DonationBar from "./components/DonationBar";
import DonorBoard from "./components/DonorBoard";
import FundraisingCard from "./components/FundraisingCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="middle">
        <FundraisingCard />
        <DonorBoard />
      </div>
      <DonationBar />
    </div>
  );
}

export default App;
