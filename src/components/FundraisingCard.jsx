import "./FundraisingCard.css";
import ProgressBar from "./ProgressBar";

export default function FundraisingCard() {
  const Top = () => {
    const line = (text, hex) => (
      <div style={{display: 'flex', alignItems: "center", justifyContent: "center", gap: ".6rem", marginBottom: 5,}}>
        <div style={{height: ".6rem", width: ".6rem", borderRadius: "50%", backgroundColor: `${hex}`}}/>
        <p>{text}</p>
      </div>
    );

    return (
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>Organization Objectives</h1>
        <div style={{display: "flex", gap: "3rem"}}>
          {line("Achieved", "#00C16A")}
          {line("Target", "#E2E8F0")}
        </div>
      </div>
    );
  };

  const Middle = () => {
    return (
      <div>
        <ProgressBar percentage={20} />
      </div>
    );
  };

  const Bottom = () => {
    const contents = [
      "$100K+ to rebuild unstable living quarters with severe foundation and asbestos threat (This project had to be postponed due to lack of funding in previous years) ",
      "$54K for ongoing orphanage funding to support 135 girls ",
      "$31K for college fees to educate 13 girls entering 12th grade ",
    ];
    const line = (text) => (
      <div style={{display: 'flex', alignItems: "flex-start", gap: "1rem", marginBottom: 5,}}>
        <img src={require("../assets/flower.png")} style={{height: "1.2rem", marginTop: 3}}/>
        <p style={{marginTop: "auto", marginBottom: "auto"}}>{text}</p>
      </div>
    );

    return (
      <div>
        <h2 style={{marginBottom: 20,}}>In 2024, we urgently need $221K+ for: </h2>
        <div>{contents.map(e => line(e))}</div>
      </div>
    );
  };


  const ViewMore = () => {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
        <span>View more ⬇️</span>
      </div>
    )
  }

  return (
    <div className="fundraising-card" style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}}>
      <Top />
      <Middle />
      <Bottom />
      <ViewMore />
    </div>
  );
}
