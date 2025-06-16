"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    question: "Est-ce que c'est gratuit ?",
    answer: "Oui, l'accès de base à Sport-App est gratuit pour tous.",
  },
  {
    question: "Quels sports sont disponibles ?",
    answer:
      "Tous les sports populaires sont disponibles, et vous pouvez en proposer de nouveaux.",
  },
  {
    question: "Puis-je proposer un lieu ?",
    answer: "Oui, vous pouvez proposer un lieu via votre compte.",
  },
  {
    question: "Y aura-t-il une appli Android/iOS ?",
    answer: "Oui, une application Android et iOS est prévue prochainement.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    FAQS.map(() => false) // Toutes les questions sont fermées au départ
  );

  const toggle = (idx: number) => {
    setOpenIndexes((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-black mb-12 text-left"
      >
        Foire aux questions
      </motion.h2>
      <div className="flex flex-col gap-6">
        {FAQS.map((faq, idx) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl shadow-md"
          >
            <button
              className="w-full flex items-center justify-between text-left px-6 py-5 md:py-6 focus:outline-none cursor-pointer group"
              aria-expanded={openIndexes[idx]}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => toggle(idx)}
            >
              <span className="text-black font-semibold text-lg md:text-xl group-hover:underline">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndexes[idx] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 text-2xl font-bold text-black select-none"
              >
                {openIndexes[idx] ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndexes[idx] && (
                <motion.div
                  id={`faq-panel-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6 pt-0 text-gray-600 text-base md:text-lg"
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
