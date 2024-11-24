import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Criado por Ilanna Freire</p>
    </footer>
  );
};

const styles = {
    footer: {
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#f4e1d2",
      borderTop: "2px solid #a57a5d",
      fontFamily: "'Courier New', Courier, monospace",
      width: "100%", 
    },
  };
  
export default Footer;
