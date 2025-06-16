import React from "react";

const ADVANTAGES = [
  {
    title: "Accessibilité",
    description: "Accédez aux terrains et aux sports près de chez vous",
  },
  {
    title: "Communauté",
    description: "Échangez et partagez avec d'autres passionnés",
  },
  {
    title: "Découverte",
    description: "Explorez de nouveaux lieux pour pratiquer vos activités",
  },
  {
    title: "Multisport",
    description: "Une plateforme pour tous les types de sports",
  },
];

const YELLOW = "#FFD600";

export default function Pourquoi() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-20 bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text text-transparent gradient-text">
        Pourquoi Sport-App&nbsp;?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
        {ADVANTAGES.map((adv) => (
          <div
            key={adv.title}
            className="flex items-start bg-white rounded-3xl p-10 shadow-xl min-h-[160px]   transition-transform duration-300"
          >
            <span
              className="inline-block min-w-[56px] min-h-[56px] w-14 h-14 rounded-full mr-8 mt-2 flex-shrink-0"
              style={{ background: YELLOW }}
              aria-hidden
            />
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                {adv.title}
              </div>
              <div className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
                {adv.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
