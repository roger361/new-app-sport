import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
            À propos
          </a>
        </li>
        <li>
          <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
