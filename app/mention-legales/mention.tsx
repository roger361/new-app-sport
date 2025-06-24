"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MentionsLegales() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 relative">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700 border-b pb-2 border-blue-200">
        Mentions légales
      </h1>
      <div className="mb-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-gray-800 text-lg leading-relaxed">
          <p className="mb-3">
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
        <div className="flex-shrink-0">
          <Image
            src="/géolocalisation.webp"
            alt="Position sur la carte"
            width={250}
            height={180}
            className="rounded-lg border border-gray-300 shadow bg-white"
          />
          <div className="text-center text-sm text-gray-500 mt-2">
            Notre position
          </div>
        </div>
      </div>
      <button
        onClick={() => router.back()}
        className="fixed left-8 bottom-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold shadow z-50"
      >
        ← Revenir en arrière
      </button>
    </div>
  );
}
