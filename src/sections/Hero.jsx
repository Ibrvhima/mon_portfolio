import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TypewriterText from "../components/TypewriterText";
import ParticleBackground from "../components/ParticleBackground";
import { animations } from "../styles/theme";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-16 lg:px-24 overflow-hidden pb-20"
      role="banner"
    >
      {/* Background animé avec particules */}
      <ParticleBackground />
      
      {/* Dégradé animé */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-blue-900/80 to-slate-800/90 animate-pulse z-10"
        aria-hidden="true"
      ></div>

      {/* Contenu principal */}
      <motion.div 
        initial={animations.fadeIn.initial}
        animate={animations.fadeIn.animate}
        transition={animations.fadeIn.transition}
        className="relative z-20 text-center max-w-4xl space-y-8"
      >
        {/* Titre avec effet de typing */}
        <div className="space-y-4 px-4 pt-16">
          <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-200 font-bold break-words">
            <TypewriterText 
              text="Développeur Fullstack Junior" 
              className="font-bold leading-tight"
              delay={200}
            />
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed px-4 break-words"
        >
          Passionné, je crée des sites et applications web modernes et performants. 
          J'aime transformer des idées en interfaces interactives avec 
          <span className="text-white font-bold"> React, Next, TypeScript</span> et 
          <span className="text-white font-bold"> TailwindCSS</span>, en maîtrisant également 
          <span className="text-white font-bold"> Node.js, Django</span> et les bases du backend.
        </motion.p>

        {/* Badges technos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-4"
        >
          {[
            { text: "React & Node.js", color: "from-blue-600 to-blue-700" },
            { text: "Next JS & Django", color: "from-blue-700 to-blue-800" },
            { text: "TypeScript & API", color: "from-blue-600 to-blue-700" }
          ].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${tech.color} text-white rounded-full font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {tech.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Badge animé */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Disponible pour des missions
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center pt-4 px-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-800 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 text-center cursor-pointer"
            aria-label="Voir mes projets"
          >
            Voir mes projets
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-white hover:text-blue-800 transition-all duration-300 text-center cursor-pointer"
            aria-label="Me contacter"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
