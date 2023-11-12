import "./App.css";
import DonationBar from "./components/DonationBar";
import DonorBoard from "./components/DonorBoard";
import FundraisingCard from "./components/FundraisingCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <body className="app">
      <NavBar />
      <div style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
        <div style={{padding: "1rem"}}>
          <h1 style={{ color: "#23262F", fontSize: "26px" }}>Hi Anima</h1>
          <p style={{ color: "#828282", fontSize: "16px" }}>
            See how you're shaping futures with us at NALAM!{" "}
          </p>
        </div>
        <div style={{display: "flex",padding: "1rem",}}>
          <div className="middle">
            <FundraisingCard />
            <DonorBoard />
          </div>
          <DonationBar />
        </div>
      </div>
    </body>
  );
}

export default App;
