import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Perfil do Usuário</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4e1d2",
    fontFamily: "'Courier New', Courier, monospace",
    borderBottom: "2px solid #a57a5d",
  },
};

export default Header;
