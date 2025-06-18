"use client";
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sophie",
    comment:
      "Super application, très intuitive et pratique pour suivre mes entraînements !",
    rating: 5,
  },
  {
    name: "Lucas",
    comment:
      "J'adore le design et la simplicité d'utilisation. Je recommande !",
    rating: 4,
  },
  {
    name: "Amélie",
    comment: "Un must-have pour tous les sportifs, bravo à l'équipe.",
    rating: 5,
  },
];

export default function Avis() {
  return (
    <section
      id="avis"
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text drop-shadow mb-4"
          >
            Vos avis comptent
          </motion.h1>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            Découvrez ce que pensent nos utilisateurs de Sport-App.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col md:flex-row items-center md:items-start gap-4 rounded-2xl px-6 py-6 border border-gray-200 bg-white"
            >
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900 text-lg mb-1">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <span className="text-green-700 font-semibold">
                  {" "}
                  — {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
