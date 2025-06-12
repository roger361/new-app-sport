"use client";

import React from "react";
import { motion } from "framer-motion";

// Remplace les chemins par tes propres images si besoin
const devices = [
  {
    label: "tel 1",
    src: "/personne-tenant-telephone.jpg",
    className:
      "w-56 h-[28rem] rounded-2xl shadow-lg z-20 flex items-center justify-center text-xl font-bold overflow-hidden bg-black",
    style: { marginLeft: "0" },
    alt: "tel 1",
  },
  {
    label: "tel 2",
    src: "/iphone-stadium.jpg",
    className:
      "w-56 h-[36rem] rounded-2xl shadow-lg z-30 flex items-center justify-center text-xl font-bold overflow-hidden bg-black",
    style: { marginLeft: "-48px" },
    alt: "tel 2",
  },
  {
    label: "ordi",
    src: "/m.avif",
    className:
      "w-[48rem] h-[32rem] rounded-3xl shadow-2xl z-10 flex items-center justify-center text-2xl font-bold overflow-hidden bg-black",
    style: { margin: "0 48px" },
    alt: "ordi",
  },
  {
    label: "téléphone",
    src: "/conception.avif",
    className:
      "w-56 h-[28rem] rounded-2xl shadow-lg z-20 flex items-center justify-center text-xl font-bold overflow-hidden bg-black",
    style: {},
    alt: "téléphone",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
  viewport: { once: true },
});

const Galerie = () => (
  <section className="py-16 px-4">
    <motion.h2
      {...fadeIn(0)}
      className="text-4xl md:text-6xl font-extrabold text-center mb-12 gradient-text bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text text-transparent"
    >
      galerie
    </motion.h2>
    {/* Desktop layout */}
    <div className="hidden md:flex items-end justify-center">
      {/* Left phones */}
      <div className="flex items-end" style={{ marginRight: "32px" }}>
        <motion.div
          {...fadeIn(0.1)}
          className={devices[0].className}
          style={devices[0].style}
        >
          <motion.img
            src={devices[0].src}
            alt={devices[0].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
        <motion.div
          {...fadeIn(0.2)}
          className={devices[1].className}
          style={devices[1].style}
        >
          <motion.img
            src={devices[1].src}
            alt={devices[1].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
      {/* Center computer */}
      <motion.div
        {...fadeIn(0.3)}
        className={devices[2].className}
        style={devices[2].style}
      >
        <motion.img
          src={devices[2].src}
          alt={devices[2].alt}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
      {/* Right phone */}
      <div className="flex items-end" style={{ marginLeft: "32px" }}>
        <motion.div
          {...fadeIn(0.4)}
          className={devices[3].className}
          style={devices[3].style}
        >
          <motion.img
            src={devices[3].src}
            alt={devices[3].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </div>
    {/* Mobile layout */}
    <div className="flex flex-col md:hidden items-center gap-6">
      <div className="flex flex-row gap-4">
        <motion.div
          {...fadeIn(0.1)}
          className="w-28 h-64 rounded-2xl shadow-lg flex items-center justify-center font-bold overflow-hidden bg-black"
        >
          <motion.img
            src={devices[0].src}
            alt={devices[0].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
        <motion.div
          {...fadeIn(0.2)}
          className="w-28 h-72 rounded-2xl shadow-lg flex items-center justify-center font-bold overflow-hidden bg-black -ml-4"
        >
          <motion.img
            src={devices[1].src}
            alt={devices[1].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
      <div className="flex flex-row gap-4">
        <motion.div
          {...fadeIn(0.3)}
          className="w-56 h-32 rounded-2xl shadow-2xl flex items-center justify-center font-bold overflow-hidden bg-black"
        >
          <motion.img
            src={devices[2].src}
            alt={devices[2].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
        <motion.div
          {...fadeIn(0.4)}
          className="w-28 h-64 rounded-2xl shadow-lg flex items-center justify-center font-bold overflow-hidden bg-black"
        >
          <motion.img
            src={devices[3].src}
            alt={devices[3].alt}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Galerie;
