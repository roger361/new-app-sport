"use client";
import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mx-auto">
        {!submitted ? (
          <div>
            <div className="text-center mb-10">
              <Mail className="w-16 h-16 mx-auto mb-4 text-black" />
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-black via-gray-800 to-green-900 bg-clip-text drop-shadow mb-4"
              >
                Soyez les premiers informés
              </motion.h1>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                Inscrivez-vous à notre newsletter pour recevoi les dernières
                actualités de Sport-App.
              </p>
            </div>

            <form
              className="flex flex-col md:flex-row gap-4 items-center justify-center w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Entrez votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-6 py-4 text-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition-all duration-300"
                  aria-label="Adresse email"
                />
                <Mail className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold text-lg rounded-full px-8 py-4 transition-all duration-300"
              >
                S&apos;inscrire
              </button>
            </form>

            {error && (
              <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-red-100 border border-red-300 rounded-full max-w-lg mx-auto">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Inscription réussie !
            </h3>
            <p className="text-gray-800 text-lg mb-7">
              Merci pour votre inscription. Vous recevrez bientôt nos dernières
              actualités.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300"
            >
              S&apos;inscrire à nouveau
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
