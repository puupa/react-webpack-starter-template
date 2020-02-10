import React from "react";

import { Header, Footer } from "./components/Layout";

import reactLogo from "./img/react-logo.png";

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  height: "calc(100vh - 75px)"
};

const hStyle = {
  color: "#777777"
};

function App() {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <h1 style={hStyle}>React Starter Template</h1>
        <h2 style={hStyle}>With Babel, Webpack and React Router</h2>
        <img src={reactLogo} alt="React Logo" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
