import "./DonorBoard.css";
import ProgressBar from "./ProgressBar";

export default function DonorBoard({amount}) {
  const Top = () => {
    const line = (text, hex) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: ".6rem",
          marginBottom: 5,
        }}
      >
        <div
          style={{
            height: ".6rem",
            width: ".6rem",
            borderRadius: "50%",
            backgroundColor: `${hex}`,
          }}
        />
        <p style={{color: "#787486", fontSize:'16px'}}>{text}</p>
      </div>
    );

    return (
      <div style={{ display: "flex", justifyContent: "space-between",marginBottom: "2rem" }}>
        <h1 style={{fontSize: "18px", color: "#25348F", fontWeight: 'bold'}}>Your Year To Date Impacts</h1>
        <div style={{ display: "flex", gap: "3rem" }}>
          {line("Achieved", "#00C16A")}
          {line("Milestone", "#E2E8F0")}
        </div>
      </div>
    );
  };

  const Middle = () => {
    const textPosition = {
      marginLeft: `${amount/1200*100 - 2}%`, // Adjust as needed
    }; 
    return (
   
      <div style={{color: "#64748B"}}>
        <div className="text-lg font-bold mt-2 " style={textPosition}>
          {`$${amount}`}
        </div>
        <ProgressBar amount={amount} total={1200}/>
        <div class="face-container">
          <div class="face1"><img src="group.png" alt="girl" /></div>
          <div class="face2"><img src="group.png" alt="girl"></img> </div>
        </div>
        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
        ></div>
      </div>
    );
  };

  const Bottom = () => {
    const line = (text) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: 5,
        }}
      >
        <img
          src={require("../assets/flower.png")}
          style={{ height: "1.2rem" }}
        />
        <p>{text}</p>
      </div>
    );

    return (
      <div style={{color: "#64748B"}}>
        <h2 style={{ marginBottom: 20 }}>Next Milestone:</h2>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: 'flex-start'}}>
          {line(
            "At $1200, you would have fully supported a girl in the orphanage for an entire year"
          )}
          <div style={{height: "5rem", width: "20rem", backgroundColor: "grey"}}/>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fundraising-card"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
    >
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}
