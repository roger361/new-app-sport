"use client";

import React from "react";

const Avis = () => (
  <section className="flex flex-col items-center py-16 px-4">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-center">
      Avis utilisateurs
    </h2>
    <div className="relative max-w-3xl mx-auto text-center mb-12">
      <span className="absolute left-0 -top-2 text-[6rem] text-gray-200 select-none leading-none">
        &ldquo;
      </span>
      <p className="text-xl md:text-2xl text-gray-700 font-medium px-8">
        Je suis vraiment impatient de la sortie de Sport-App !<br />
        Avoir un outil pour échanger des lieux et rencontrer des sportifs près
        de chez moi me serait très utile
      </p>
      <span className="absolute right-0 bottom-0 text-[6rem] text-gray-200 select-none leading-none">
        &rdquo;
      </span>
    </div>
    <div className="flex flex-col items-center gap-4">
      <div className="w-40 h-40 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg font-semibold mb-2">
        img
      </div>
      <div className="text-xl font-bold">Thomas</div>
    </div>
  </section>
);

export default Avis;
