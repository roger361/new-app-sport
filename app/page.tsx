import React from "react";

import Header from "./web/header";
import Fonction from "./web/fonction";
import Avis from "./web/avis";
import Galerie from "./web/galerie";
import Pourquoi from "./web/pourquoi";
import Newsletter from "./web/newsletter";
import Question from "./web/question";
import Footer from "./web/footer";
export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Fonction />
      <Avis />
      <Galerie />
      <Pourquoi />
      <Newsletter />
      <Question />
      <Footer />
      {/* Ajoute d'autres sections ici si nécessaire */}
    </div>
  );
}
