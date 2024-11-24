import React from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.container}>
        <UserCard name="Alice Santos" age={28} occupation="Designer" />
        <UserCard name="João Oliveira" age={32} occupation="Desenvolvedor" />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", 
      backgroundColor: "#fdf6e3",
      fontFamily: "'Courier New', Courier, monospace",
    },
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
      gap: "20px",
    },
  };

  export default App;