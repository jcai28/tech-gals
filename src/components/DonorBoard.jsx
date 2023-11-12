import "./DonorBoard.css";
import ProgressBar from "./ProgressBar";
import Form from "react-bootstrap/Form";

export default function DonorBoard() {
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
        <p>{text}</p>
      </div>
    );

    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Your Year To Date Impacts</h1>
        <div style={{ display: "flex", gap: "3rem" }}>
          {line("Achieved", "#00C16A")}
          {line("Milestone", "#E2E8F0")}
        </div>
      </div>
    );
  };

  const Middle = () => {
    return (
      <div>
        <ProgressBar percentage={20} />
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
      <div>
        <h2 style={{ marginBottom: 20 }}>Next Milestone:</h2>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: 'flex-start'}}>
          {line(
            "At $400, you would have fully supported a girl in the orphanage for an entire year"
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
