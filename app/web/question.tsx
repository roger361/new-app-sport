"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Est-ce que c'est gratuit ?",
    answer: "Oui, l'accès à la plateforme est entièrement gratuit.",
    isOpen: false,
  },
  {
    question: "Quels sports sont disponibles ?",
    answer:
      "Tous les sports sont bienvenus sur la plateforme, du football au yoga.",
    isOpen: false,
  },
  {
    question: "Puis-je proposer un lieu ?",
    answer: "Oui, vous pouvez proposer un lieu via votre compte.",
    isOpen: true,
  },
  {
    question: "Y aura-t-il une appli Android/iOS ?",
    answer:
      "Une application mobile est prévue prochainement sur Android et iOS.",
    isOpen: false,
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState(() => faqs.map(() => false));

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <Section>
      <Title>Foire aux questions</Title>
      <List>
        {faqs.map((faq, index) => (
          <Item key={index}>
            <Header
              onClick={() => toggle(index)}
              aria-expanded={openIndexes[index]}
              role="button"
            >
              <Question>{faq.question}</Question>
              <Icon animate={{ rotate: openIndexes[index] ? 180 : 0 }}>
                {openIndexes[index] ? "−" : "+"}
              </Icon>
            </Header>
            <AnimatePresence initial={false}>
              {openIndexes[index] && (
                <Answer
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnswerText>{faq.answer}</AnswerText>
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

const Icon = styled(motion.span)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  transition: transform 0.3s ease;
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerText = styled.div`
  padding: 1rem 2rem 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;
