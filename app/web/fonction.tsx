"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Localiser des terrains",
    desc: "Trouvez facilement les lieux pour pratiquer votre sport",
    imgAlt: "Localiser",
    imgSrc: "localiser.jpg",
  },
  {
    title: "Ajouter vos sports",
    desc: "Vous pratiquez un sport rare ?\nCréez-le dans l'app",
    imgAlt: "Ajouter",
    imgSrc: "ajouter.jpg",
  },
  {
    title: "Partage de contenu",
    desc: "Photos, vidéos, avis : partagez vos expériences sportives",
    imgAlt: "Partage",
    imgSrc: "partagé.jpg",
  },
  {
    title: "Interactions sociales",
    desc: "Invitez vos amis, rejoignez des groupes et organisez des matchs",
    imgAlt: "Social",
    imgSrc: "interaction.jpg",
  },
];

function Fonction() {
  return (
    <section className="py-16 px-4 md:px-12 rounded-3xl shadow-lg my-12 bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text text-transparent drop-shadow gradient-text"
      >
        Fonctionnalités clés
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white/80 rounded-2xl shadow-xl p-8  transition-transform"
          >
            <img
              src={f.imgSrc}
              alt={f.imgAlt}
              className="w-24 h-24 object-cover rounded-xl mb-6 shadow-lg bg-white"
            />
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text text-transparent gradient-text">
              {f.title}
            </h3>
            <p className="text-gray-800 font-medium whitespace-pre-line">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Fonction;
