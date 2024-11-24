import React from "react";

const UserCard = ({ name, age, occupation }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Ocupação: {occupation}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #a57a5d",
    padding: "15px",
    borderRadius: "10px",
    margin: "10px",
    backgroundColor: "#ffe6cc",
    fontFamily: "'Courier New', Courier, monospace",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default UserCard;
