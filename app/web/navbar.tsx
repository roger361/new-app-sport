"use client";

import { motion } from "framer-motion";
import React, { JSX, useCallback, useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const sections = [
    { id: "accueil", label: "Accueil" },
    { id: "caracteristiques", label: "Caractéristiques" },
    { id: "avis", label: "Avis" },
    { id: "galerie", label: "Galerie" },
    { id: "avantages", label: "Avantages" },
    { id: "newsletter", label: "Newsletter" },
    { id: "faq", label: "FAQ" },
  ];

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150;
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    let timeout: number | null = null;

    const onScroll = () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
        handleScroll();
      }, 100);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [handleScroll]);

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md rounded-full hidden lg:block">
        <nav className="flex justify-center items-center gap-4 py-2 px-6">
          <div className="flex justify-center items-center gap-4">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-black bg-yellow-400 shadow-md"
                    : "text-black hover:bg-yellow-400"
                }`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSection === section.id ? 1 : 0.8,
                  scale: activeSection === section.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {section.label}
              </motion.a>
            ))}
          </div>
        </nav>
      </div>

      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          className="focus:outline-none bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          aria-label="Toggle menu"
          type="button"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {(menuOpen || isClosing) && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: isClosing ? 300 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white text-black shadow-lg py-6 px-4 z-50 flex flex-col"
          >
            <div className="flex flex-col space-y-4 md:space-y-6 px-2 mb-16">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`py-3 md:py-4 text-lg md:text-sm transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-black font-bold text-xl md:text-base"
                      : "text-black hover:text-gray-600 font-light"
                  }`}
                >
                  <span className="uppercase tracking-wide">
                    {section.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
