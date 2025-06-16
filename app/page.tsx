import React from "react";

import Header from "./web/header";
import Fonction from "./web/fonction";
import Avis from "./web/avis";
import Galerie from "./web/galerie";
import Pourqoui from "./web/pourquoi";
import Question from "./web/question";
import Footer from "./web/footer";
export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Fonction />
      <Avis />
      <Galerie />
      <Pourqoui />
      <Question />
      <Footer />
    </div>
  );
}
