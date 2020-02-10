import React from "react";

const headerStyle = {
  height: "75px",
  backgroundColor: "#61dbfb"
};

const navStyle = {
  display: "flex",
  justifyContent: "flex-end",
  padding: "16px"
};

const navUlStyle = {
  listStyleType: "none",
  display: "flex"
};

const navLiStyle = {
  padding: "12px",
  fontWeight: "700",
  color: "#777777",
  cursor: "pointer"
};

const footerStyle = {
  height: "160px",
  backgroundColor: "#61dbfb",
  padding: "16px",
  color: "#777777"
};

const Nav = () => {
  return (
    <nav style={navStyle}>
      <ul style={navUlStyle}>
        <li style={navLiStyle}>HOME</li>
        <li style={navLiStyle}>ABOUT</li>
        <li style={navLiStyle}>SETTINGS</li>
        <li style={navLiStyle}>LOGIN</li>
      </ul>
    </nav>
  );
};

export const Header = () => {
  return (
    <header style={headerStyle}>
      <Nav />
    </header>
  );
};

export const Footer = () => {
  return <footer style={footerStyle}>&copy; 2020 Arthur van Acker</footer>;
};
