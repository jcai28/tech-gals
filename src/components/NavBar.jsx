import "./NavBar.css";

export default function NavBar() {
  const styles = {
    logo: {
      display: "flex",
      gap: "1rem",
    },
    top: {
      fontSize: 18,
    },
    item: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    },
    items: {
      display: "flex",
      flexDirection: "column",
      gap: 33,
      marginTop: 42,
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

  const Divider = () => {
    return (
      <div
        className="divider"
        style={{ height: 1, width: "100%", backgroundColor: "#C4C4C4"}}
      />
    );
  };

  const Top = () => {
    return (
      <div style={styles.top}>
        <div style={styles.logo}>
          <img src={require("../assets/flower.png")} alt="flower" />
          <img src={require("../assets/logo.png")} alt="nalam logo" />
        </div>
        <div style={styles.items}>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Donor Dashboard</p>
          </div>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Donation History</p>
          </div>
          <div>
            <div style={styles.item}>
              <IconPlaceholder />
              <p>Written</p>
            </div>
            <div style={styles.item}>
              <div
                style={{ width: "1rem", height: "1rem", visibility: "none" }}
              />
              <span>Acknowledgements</span>
            </div>
          </div>
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Payment</p>
          </div>
          <Divider />
          <div style={styles.item}>
            <IconPlaceholder />
            <p>Settings</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <Top />
    </div>
  );
}
