"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 mt-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <span className="font-bold text-black text-lg">
        Sport-App{" "}
        <span className="text-gray-500 font-normal text-base align-middle">
          &copy; 2024
        </span>
      </span>
      <a
        href="/mentions-legales"
        className="text-blue-600 hover:underline hover:text-blue-800 transition"
      >
        Mentions légales
      </a>
    </motion.div>
  </footer>
);

export default Footer;
