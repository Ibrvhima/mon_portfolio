import React from "react";

const Hero = () => {
  return (
    <section
      id="acceuil"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-16 lg:px-24 overflow-hidden"
      role="banner"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/16323581/pexels-photo-16323581.jpeg')",
        }}
        aria-hidden="true"
      ></div>

      {/* Dégradé animé */}
      <div
        className="absolute inset-0 bg-linear-to-br from-blue-400/90 via-blue-600/80 to-indigo-700/80 animate-gradientMove z-0"
        aria-hidden="true"
      ></div>

      {/* Contenu principal */}
      <div className="relative z-5 text-center max-w-3xl space-y-6 mt-20 md:mt-10 mb-12 md:mb-8">
        {/* Titre */}
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Développeur web junior
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto drop-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Passionné, je crée des sites et applications web modernes et performants. J’aime transformer des idées en interfaces interactives avec <strong>React, Next, TypeScript</strong> et <strong> TailwindCSS</strong>, tout en apprenant les bases du back-end avec <strong>Node.js</strong> et <strong>Django</strong>.
        </p>

        {/* Badges technos */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="bg-indigo-800/70 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition">
            React & TailwindCSS
          </span>
          <span className="bg-blue-900/80 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition">
            Next JS & TypeScript
          </span>
          <span className="bg-blue-600/70 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition">
            Django & Node.js
          </span>
        </div>

        {/* Boutons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#projects"
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition-all duration-300"
            aria-label="Voir mes projets"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
            aria-label="Me contacter"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
