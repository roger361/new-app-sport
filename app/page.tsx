import React from "react";

import Header from "./web/header";
import Fonction from "./web/fonction";
import Avis from "./web/avis";
export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Fonction />
      <Avis />
      {/* Ajoute d'autres sections ici si nécessaire */}
    </div>
  );
}
