import "./NavBar.css";

export default function NavBar() {
  const styles = {
    logo: {
      display: "flex",
      gap: "1rem",
    },
    item: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    },
  };

  const IconPlaceholder = () => {
    return (
      <div
        style={{
          width: "1rem",
          height: "1rem",
          border: "2px solid #878787",
          borderRadius: "50%",
        }}
      />
    );
  };

  const Top = () => {
    return (
      <div>
        <div style={styles.logo}>
          <img src={require("../assets/flower.png")} alt="flower" />
          <img src={require("../assets/logo.png")} alt="nalam logo" />
        </div>
        <div className="items">
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Donor Dashboard</p>
          </div>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Donation History</p>
          </div>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Written Acknowledgements</p>
          </div>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Payment</p>
          </div>
        </div>
      </div>
    );
  };

  return <div className="nav-bar">
    <Top/>
  </div>;
}
