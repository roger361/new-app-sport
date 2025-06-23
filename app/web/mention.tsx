"use client";

import React from "react";

export default function MentionsLegales() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mentions légales</h1>
      <p>
        <strong>Nom de l’entreprise :</strong> Sport App 2.0
        <br />
        <strong>Adresse :</strong> 123 rue du Sport, 75000 Paris
        <br />
        <strong>SIRET :</strong> 123 456 789 00010
        <br />
        <strong>Directeur de la publication :</strong> Jean Dupont
        <br />
        <strong>Hébergeur :</strong> OVH, 2 rue Kellermann, 59100 Roubaix,
        France
        <br />
        <strong>Contact :</strong> contact@sportapp.com
      </p>
      <p>
        Ce site respecte la législation française. Les informations fournies
        sont à titre indicatif et peuvent être modifiées à tout moment.
      </p>
    </div>
  );
}
