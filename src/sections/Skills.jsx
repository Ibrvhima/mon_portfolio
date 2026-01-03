import React from "react";

// Frontend
import { FaReact, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Backend
import { FaNodeJs, FaServer } from "react-icons/fa";
import { SiExpress, SiDjango, SiFirebase, SiSupabase } from "react-icons/si";

// Database
import { FaDatabase } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb, SiSqlite } from "react-icons/si";

// Tools
import { FaGit, FaGithub, FaFigma, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden text-gray-900 dark:text-gray-100"
    >
      {/* Dégradé léger */}
      <div
        className="absolute inset-0 bg-linear-to-br 
        from-blue-200 via-white to-blue-300 
        dark:from-gray-300 dark:via-gray-800 dark:to-gray-700 
        animate-gradient-x"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Titre */}
        <div className="text-center space-y-3" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies et outils que j’utilise pour concevoir des expériences
            web modernes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* FRONTEND */}
          <SkillCard title="Front-end" icon={<FaReact />} dataAos="fade-up" dataDelay="100">
            <SkillTag icon={<FaReact />} label="React" />
            <SkillTag icon={<SiNextdotjs />} label="Next.js" />
            <SkillTag icon={<FaAngular />} label="Angular" />
            <SkillTag icon={<SiTailwindcss />} label="TailwindCSS" />
          </SkillCard>

          {/* BACKEND */}
          <SkillCard title="Back-end" icon={<FaServer />} color="text-purple-600" dataAos="fade-up" dataDelay="200">
            <SkillTag icon={<FaNodeJs />} label="Node.js" />
            <SkillTag icon={<SiExpress />} label="Express" />
            <SkillTag icon={<SiDjango />} label="Django" />
            <SkillTag icon={<SiFirebase />} label="Firebase" />
            <SkillTag icon={<SiSupabase />} label="Supabase" />
          </SkillCard>

          {/* DATABASE */}
          <SkillCard title="DataBase" icon={<FaDatabase />} color="text-green-600" dataAos="fade-up" dataDelay="300">
            <SkillTag icon={<SiMysql />} label="MySQL" />
            <SkillTag icon={<SiPostgresql />} label="PostgreSQL" />
            <SkillTag icon={<SiMongodb />} label="MongoDB" />
            <SkillTag icon={<SiSqlite />} label="SQLite" />
          </SkillCard>

          {/* TOOLS */}
          <SkillCard title="Tools" icon={<FaTools />} color="text-gray-400" dataAos="fade-up" dataDelay="400">
            <SkillTag icon={<FaGit />} label="Git" />
            <SkillTag icon={<FaGithub />} label="GitHub" />
            <SkillTag icon={<FaFigma />} label="Figma" />
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Card */
const SkillCard = ({ title, icon, children, color = "text-blue-600", dataAos, dataDelay }) => (
  <div
    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
      rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    data-aos={dataAos}
    data-aos-delay={dataDelay}
  >
    <div className="flex items-center gap-3 mb-4">
      <span className={`text-2xl ${color}`}>{icon}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-3">{children}</div>
  </div>
);

/* 🔹 Badge */
const SkillTag = ({ icon, label }) => (
  <span
    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 
      text-gray-800 dark:text-gray-100 px-3 py-2 rounded-full 
      text-sm font-medium shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition"
  >
    <span className="text-lg text-blue-600 dark:text-blue-400">{icon}</span>
    {label}
  </span>
);

export default Skills;
