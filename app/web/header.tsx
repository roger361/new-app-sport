"use client";

import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => (
  <header className="w-full px-4 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg bg-transparent">
    {/* Bloc gauche : texte */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-xl flex flex-col items-start gap-4"
    >
      {/* Logo */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-2xl font-bold tracking-wide text-white drop-shadow mb-2"
      >
        Sport-App
      </motion.span>

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text drop-shadow mb-4"
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
        className="text-lg font-medium text-white/90 mb-6"
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
        className="px-8 py-3 font-extrabold text-black rounded-xl shadow-lg border-2 border-white bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 hover:from-green-400 hover:to-orange-500 transition-transform duration-300"
      >
        🏆 Être alerté de la sortie de l&apos;app
      </motion.a>
    </motion.div>

    {/* Image à droite avec animation infinie */}
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0"
    >
      <img
        src="/iphone.png"
        alt="Aperçu de l'application mobile"
        className="w-40 md:w-56 h-auto"
      />
    </motion.div>
  </header>
);

export default Header;
