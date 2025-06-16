"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between">
      <div className="text-white font-bold text-xl">SportApp</div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-white hover:text-blue-200">
            Accueil
          </a>
        </li>
        <li>
          <a href="/activites" className="text-white hover:text-blue-200">
            Activités
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-blue-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
