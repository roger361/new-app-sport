"use client";

import React from "react";
import { motion } from "framer-motion";

const Avis = () => (
  <section className="flex flex-col items-center py-16 px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-5xl md:text-6xl font-extrabold mb-10 text-center"
    >
      Avis utilisateurs
    </motion.h2>
    <div className="relative max-w-3xl mx-auto text-center mb-12">
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-0 -top-2 text-[6rem] text-gray-200 select-none leading-none"
      >
        &ldquo;
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-700 font-medium px-8"
      >
        Je suis vraiment impatient de la sortie de Sport-App !<br />
        Avoir un outil pour échanger des lieux et rencontrer des sportifs près
        de chez moi me serait très utile
      </motion.p>
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute right-0 bottom-0 text-[6rem] text-gray-200 select-none leading-none"
      >
        &rdquo;
      </motion.span>
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <motion.img
        whileHover={{ scale: 1.05, rotate: 2 }}
        src="/homme.jpg"
        className="w-40 h-40 rounded-full object-cover mb-2 shadow-lg"
      />
      <div className="text-xl font-bold">Thomas</div>
    </motion.div>
  </section>
);

export default Avis;
