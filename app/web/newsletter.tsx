"use client";

import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => (
  <section className="py-20 px-4 flex flex-col items-center justify-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold text-black text-center"
    >
      Soyez les premiers informés
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="text-gray-500 text-lg md:text-xl text-center mt-4 max-w-xl"
    >
      Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
      de Sport-App.
    </motion.p>
    <motion.form
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="w-full max-w-lg flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <motion.input
        type="email"
        placeholder="Adresse email"
        className="flex-1 w-full md:w-auto px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        required
        whileFocus={{ scale: 1.03 }}
      />
      <motion.button
        type="submit"
        className="w-full md:w-auto px-6 py-3 rounded-full bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-600 transition"
      >
        S&apos;inscrire
      </motion.button>
    </motion.form>
  </section>
);

export default Newsletter;
