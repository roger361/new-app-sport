"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const avantages = [
  {
    titre: "Accessibilité",
    description: "Accédez aux terrains et aux sports près de chez vous",
  },
  {
    titre: "Communauté",
    description: "Échangez et partagez avec d'autres passionnés",
  },
  {
    titre: "Découverte",
    description: "Explorez de nouveaux lieux pour pratiquer vos activités",
  },
  {
    titre: "Multisport",
    description: "Une plateforme pour tous les types de sports",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, type: "spring" },
  }),
};

export default function PourquoiSportApp() {
  return (
    <Container>
      <Title>Pourquoi Sport-App&nbsp;?</Title>
      <Grid>
        {avantages.map((avantage, i) => (
          <Card
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Dot />
            <div>
              <CardTitle>{avantage.titre}</CardTitle>
              <CardDescription>{avantage.description}</CardDescription>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

// ========== Styled Components ==========

const Container = styled.section`
  padding: 3rem 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;

  // Mobile: 1 colonne
  grid-template-columns: 1fr;

  // Desktop (≥768px): 2 colonnes
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  text-align: left;
`;

const Dot = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fbbc04;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: #000;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #444;
  font-size: 1.05rem;
  line-height: 1.6;
`;
