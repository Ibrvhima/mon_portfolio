import React from "react";
import profilImg from "../assets/images/profil.png";

// Icons
import { FaAngular, FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-16 lg:px-24 py-20 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* 🎨 Dégradé de fond */}
      <div
        className="absolute inset-0 bg-linear-to-br 
        from-blue-200 via-blue-100 to-indigo-200 
        dark:from-gray-300 dark:via-gray-600 dark:to-gray-500 
        animate-gradient-x"
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Titre */}
        <div className="text-center space-y-3" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-400 tracking-tight">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-700 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* Image + Texte */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div
            className="w-full md:w-2/5 lg:w-1/3 animate-float"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={profilImg}
              alt="Ibrahima Diallo"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Texte */}
          <div
            className="w-full md:w-1/2 space-y-5 text-lg leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <p className="opacity-90">
              Je suis{" "}
              <strong className="text-blue-800 dark:text-blue-600">
                Ibrahima Diallo
              </strong>
              , un développeur web junior passionné par la création
              d’expériences web modernes, performantes et esthétiques.
            </p>

            <p>
              Je développe des applications en utilisant{" "}
              <strong>React, Node.js, Django, Next.js</strong> et{" "}
              <strong>Express</strong>, avec <strong>TailwindCSS</strong> pour un
              design moderne et responsive.
            </p>

            <p>
              J’aime apprendre en continu et transformer des idées en projets
              concrets avec un code propre et des interfaces intuitives.
            </p>

            {/* Badges technos */}
            <div
              className="flex flex-wrap gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <TechBadge color="bg-red-500 hover:bg-red-700" icon={<FaAngular />}>
                Angular
              </TechBadge>

              <TechBadge
                color="bg-sky-500 hover:bg-sky-600"
                icon={<FaReact className="animate-spin-slow" />}
              >
                React
              </TechBadge>

              <TechBadge color="bg-green-600 hover:bg-green-700" icon={<FaNodeJs />}>
                Node.js
              </TechBadge>

              <TechBadge color="bg-blue-900 hover:bg-blue-950" icon={<SiDjango />}>
                Django
              </TechBadge>

              <TechBadge color="bg-gray-800 hover:bg-gray-900" icon={<SiNextdotjs />}>
                Next.js
              </TechBadge>

              <TechBadge color="bg-gray-700 hover:bg-gray-800" icon={<SiExpress />}>
                Express
              </TechBadge>

              <TechBadge color="bg-emerald-500 hover:bg-emerald-600" icon={<SiTailwindcss />}>
                TailwindCSS
              </TechBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Badge réutilisable */
const TechBadge = ({ icon, children, color }) => (
  <span
    className={`flex items-center gap-2 ${color} text-white px-4 py-2 rounded-full 
      text-sm font-semibold shadow-md transition-all hover:-translate-y-1`}
  >
    <span className="text-lg">{icon}</span>
    {children}
  </span>
);

export default About;
