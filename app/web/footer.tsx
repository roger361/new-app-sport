import React from "react";

const Footer: React.FC = () => (
  <footer>
    <div>
      <p>
        &copy; {new Date().getFullYear()} Sport App 2.0. Tous droits réservés.
      </p>
      <nav>
        <a href="/about" style={{ color: "#fff", margin: "0 1rem" }}>
          À propos
        </a>
        <a href="/contact" style={{ color: "#fff", margin: "0 1rem" }}>
          Contact
        </a>
        <a href="/privacy" style={{ color: "#fff", margin: "0 1rem" }}>
          Confidentialité
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
