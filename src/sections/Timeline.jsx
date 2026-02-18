import React from "react";
import { FaCode, FaDesktop, FaUsersCog, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Full-Stack",
      period: "2023 — Aujourd’hui",
      description:
        "Réalisation de projets complets avec Angular, Django, Node.js et TailwindCSS. Conception d’API robustes et intégration front-end moderne.",
      icon: <FaCode />,
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "Stage Développeur Front-End",
      period: "2022 — 2023",
      description:
        "Création de dashboards, optimisation d’interfaces et correction de bugs.",
      icon: <FaDesktop />,
      bgColor: "bg-indigo-600",
    },
    {
      id: 3,
      title: "Projets Open-Source",
      period: "2021 — Présent",
      description:
        "Contribution à des bibliothèques JavaScript et création d’outils pour développeurs.",
      icon: <FaUsersCog />,
      bgColor: "bg-purple-600",
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      period: "2020 — Présent",
      description:
        "Développement de sites web et applications pour des clients variés, avec un focus sur l’UX/UI et la performance.",
      icon: <FaLaptopCode />,
      bgColor: "bg-green-600",
    },
  ];

  return (
    <section
      id="timeline"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-16 text-white bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, #64748B 20px, #64748B 21px)",
          backgroundSize: '100% 21px'
        }} />
      </div>
      {/* Titre */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600">
          Mon Expérience
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Voici un aperçu de mon parcours professionnel et des projets sur lesquels j'ai travaillé.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 border-l-2 border-blue-600 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150} // effet cascade
          >
            <div
              className={`absolute -left-5 w-10 h-10 ${exp.bgColor} text-white rounded-full shadow-md flex items-center justify-center`}
            >
              {exp.icon}
            </div>
            <div className="ml-12">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
