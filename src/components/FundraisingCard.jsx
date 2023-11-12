import "./FundraisingCard.css";
import ProgressBar from "./ProgressBar";
import Form from "react-bootstrap/Form";

export default function FundraisingCard({amount}) {
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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1 style={{fontSize: "18px", color: "#25348F", fontWeight: 'bold'}}>Organization Objectives</h1>
        <div style={{ display: "flex", gap: "3rem" }}>
          {line("Achieved", "#00C16A")}
          {line("Target", "#E2E8F0")}
        </div>
      </div>
    );
  };

  const Middle = () => {
    const YearSelect = () => {
      return (
        <div style={{ border: "2px solid #EDEDED", width: "fit-content", padding: "0 2px"}}>
          <Form.Select aria-label="Default select example">
            <option value="1">2024</option>
            <option value="2">2023</option>
            <option value="3">2022</option>
            <option value="4">2021</option>
            <option value="5">2020</option>
            <option value="6">2019</option>
            <option value="7">2018</option>
            <option value="8">2017</option>
            <option value="9">2016</option>
            <option value="10">2015</option>
          </Form.Select>
        </div>
      );
    };

    return (
      <div style={{color: "#64748B"}}>
        <p><span style={{fontWeight: "700", fontSize: "20px"}}>${66300+amount}</span> raised of $221,000* goal </p>
        <ProgressBar amount={amount+66310} total={221000} />
        <div style={{display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem"}}>
          <span>Year</span>
          <YearSelect />
        </div>
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
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: 5,
        }}
      >
        <img
          src={require("../assets/flower.png")}
          style={{ height: "1.2rem", marginTop: 3 }}
        />
        <p style={{ marginTop: "auto", marginBottom: "auto" }}>{text}</p>
      </div>
    );

    return (
      <div style={{color: "#64748B"}}>
        <h2 style={{ marginBottom: 20 }}>
          In 2024, we urgently need $221K+ for: 
        </h2>
        <div>{contents.map((e) => line(e))}</div>
      </div>
    );
  };

  const ViewMore = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20, color: "#64748B"}}>
        <span>View more ⬇️</span>
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
      <ViewMore />
    </div>
  );
}
