import React from "react";
import LogoutButton from "./LogoutBtn";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>My Website</h1>
      <nav style={navStyle}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <LogoutButton />
    </header>
  );
};

const headerStyle = {
  display: "flex",
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

const logoStyle = {
  textAlign: "left",
  width: "15%",
};

const navStyle = {
  display: "flex",
  border: "1px solid red",
  width: "100%",
  gap: "1rem",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default Header;
