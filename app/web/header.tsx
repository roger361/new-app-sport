"use client";

import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => (
  <div className="relative w-full bg-gradient-to-b from-green-800 to-green-600">
    <header className="w-full py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 pt-28 md:pt-36">
      {/* Bloc gauche */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-start w-full max-w-xl gap-4"
      >
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl font-bold text-white mb-2 tracking-wide drop-shadow"
        >
          Sport-App
        </motion.span>
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text text-transparent drop-shadow"
        >
          Trouvez les meilleurs
          <br />
          terrains de sport
          <br />
          près de chez vous
        </motion.h1>
        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-white/90 mb-6 font-medium"
        >
          Rassemblez votre équipe, découvrez de nouveaux terrains et vivez le
          sport comme jamais auparavant.
          <br />
          <span className="font-bold">Sport-App</span> vous connecte à votre
          passion, où que vous soyez.
        </motion.p>
        {/* Bouton newsletter */}
        <motion.a
          href="#newsletter"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 hover:from-green-400 hover:to-orange-500 font-extrabold px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105 border-2 border-white text-black"
        >
          🏆 Être alerté de la sortie de l&apos;app
        </motion.a>
      </motion.div>

      {/* Image à droite */}
      <motion.div
        className="w-full flex justify-center md:justify-end md:w-auto mt-8 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <img
          src="/iphone.png"
          alt="Aperçu application mobile"
          className="w-40 md:w-56 h-auto shadow-2xl border-4 border-green-400"
        />
      </motion.div>
    </header>
  </div>
);

export default Header;
