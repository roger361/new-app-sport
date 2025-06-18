"use client";

import { motion } from "framer-motion";
import React, { JSX, useCallback, useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    setScrolled(window.scrollY > 50);

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
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.nav
          className={`flex justify-center items-center gap-2 py-3 px-8 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-100"
              : "bg-white/90 backdrop-blur-sm shadow-lg"
          }`}
          animate={{
            scale: scrolled ? 0.95 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden ${
                activeSection === section.id
                  ? "text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                  layoutId="activeBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      {/* Mobile Navigation Button */}
      <motion.div
        className="fixed top-4 right-4 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.button
          className={`focus:outline-none p-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-100"
              : "bg-white/90 backdrop-blur-sm shadow-lg"
          }`}
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          aria-label="Toggle menu"
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-gray-800"
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
          </motion.div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        {(menuOpen || isClosing) && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: isClosing ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: isClosing ? 300 : 0,
                opacity: isClosing ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white/95 backdrop-blur-md shadow-2xl z-50 flex flex-col border-l border-gray-100"
            >
              <div className="flex flex-col space-y-2 px-6 pt-20 pb-8">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className={`group relative py-4 px-4 text-lg transition-all duration-300 rounded-xl overflow-hidden ${
                      activeSection === section.id
                        ? "text-white font-semibold"
                        : "text-gray-700 hover:text-gray-900 font-medium"
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl"
                        layoutId="activeMobileBackground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="uppercase tracking-wider text-sm">
                        {section.label}
                      </span>
                      <motion.div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeSection === section.id
                            ? "bg-white"
                            : "bg-transparent group-hover:bg-gray-400"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{
                          scale: activeSection === section.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto p-6 border-t border-gray-100">
                <div className="text-center text-sm text-gray-500">
                  Navigation
                </div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  );
}
