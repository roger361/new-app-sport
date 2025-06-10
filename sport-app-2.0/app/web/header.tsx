"use client";

import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionImg = motion.img;
const MotionA = motion("a");

function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-blue-900 via-green-400 to-orange-300 pt-8 pb-16 px-4 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
      {/* Bloc texte à gauche */}
      <MotionDiv
        className="flex flex-col items-start w-full max-w-xl gap-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Titre */}
        <MotionH1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Trouvez les meilleurs
          <br />
          terrains de sport
          <br />
          près de chez vous
        </MotionH1>
        {/* Sous-titre */}
        <MotionP
          className="text-lg text-white mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Rassemblez votre équipe, découvrez de nouveaux terrains et vivez le
          sport comme jamais auparavant.
          <br />
          <span className="text-yellow-300 font-bold">Sport-App</span> vous
          connecte à votre passion, où que vous soyez.
        </MotionP>
        {/* Bouton newsletter */}
        <MotionA
          href="#newsletter"
          className="w-full sm:w-auto text-center bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 hover:from-green-400 hover:to-orange-500 text-blue-900 font-extrabold px-6 py-3 md:px-8 md:py-3 rounded-xl shadow-lg transition transform hover:scale-105 border-2 border-white text-base md:text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
        >
          🏆 Être alerté de la sortie de l&apos;app
        </MotionA>
      </MotionDiv>
      {/* Image iPhone à droite */}
      <MotionDiv
        className="w-full flex justify-center md:justify-end md:w-auto mt-8 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <MotionImg
          src="/iphone.png"
          alt="Aperçu application mobile"
          className="w-40 md:w-56 h-auto rounded-2xl shadow-2xl border-4 border-green-400"
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            type: "tween",
          }}
          whileHover={{ scale: 1.04, rotate: 2 }}
        />
      </MotionDiv>
    </header>
  );
}

export default Header;
