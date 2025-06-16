import React from "react";

import Header from "./web/header";
import Fonction from "./web/fonction";
import Avis from "./web/avis";
import Galerie from "./web/galerie";
export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Fonction />
      <Avis />
      <Galerie />
      {/* Ajoute d'autres sections ici si nécessaire */}
    </div>
  );
}
