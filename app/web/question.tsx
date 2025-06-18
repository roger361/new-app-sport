"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    q: "Comment puis-je créer un compte sur Sport-App ?",
    a: "Pour créer un compte, cliquez sur 'S’inscrire' en haut à droite et suivez les instructions en renseignant votre email et un mot de passe.",
  },
  {
    q: "Sport-App est-il compatible avec tous les appareils ?",
    a: "Oui, Sport-App fonctionne sur ordinateur, tablette et smartphone via votre navigateur ou notre application mobile.",
  },
  {
    q: "Comment suivre mes progrès sportifs ?",
    a: "Rendez-vous dans la rubrique 'Tableau de bord' pour visualiser vos statistiques, vos séances et vos évolutions au fil du temps.",
  },
  {
    q: "Puis-je rejoindre une communauté ou un groupe ?",
    a: "Oui, Sport-App propose des groupes thématiques et une communauté active pour échanger, se motiver et partager ses réussites.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq">
      <Title>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text drop-shadow mb-4"
        >
          Foire aux questions
        </motion.h1>
      </Title>
      <List>
        {questions.map((item, idx) => (
          <Item key={idx}>
            <Header
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              role="button"
            >
              <Question>{item.q}</Question>
              <ChevronDown
                className={`w-6 h-6 text-emerald-500 transform transition-transform duration-300 ${
                  open === idx ? "rotate-180" : ""
                }`}
              />
            </Header>
            <AnimatePresence initial={false}>
              {open === idx && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-700 text-base"
                >
                  {item.a}
                </Answer>
              )}
            </AnimatePresence>
          </Item>
        ))}
      </List>
    </Section>
  );
}

// === Styled Components ===

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 2rem;
  text-align: center; /* centré */
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Item = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  width: 100%;
  min-height: 80px; /* hauteur minimale un peu plus grande */
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.05);
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 1.75rem 2rem;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f9f9f9;
  }
`;

const Question = styled.span`
  font-weight: 600;
  color: #000;
  font-size: 1.3rem; /* un peu plus grand */
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;
