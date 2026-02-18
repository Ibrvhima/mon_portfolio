import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { animations, theme } from "../styles/theme";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillsData = [
    {
      category: "Frontend",
      icon: FaCode,
      items: [
        { name: "HTML5", level: 90, icon: FaCode, color: "from-orange-500 to-red-500" },
        { name: "CSS3 / Tailwind", level: 85, icon: FaPalette, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 80, icon: FaCode, color: "from-yellow-500 to-orange-500" },
        { name: "React.js", level: 80, icon: FaReact, color: "from-cyan-500 to-blue-500" },
        { name: "TypeScript", level: 75, icon: SiTypescript, color: "from-blue-600 to-blue-700" },
        { name: "Next.js", level: 70, icon: SiNextdotjs, color: "from-gray-800 to-black" },
      ],
    },
    {
      category: "Backend",
      icon: FaDatabase,
      items: [
        { name: "Django", level: 60, icon: SiDjango, color: "from-green-600 to-green-800" },
        { name: "Node.js", level: 65, icon: FaNodeJs, color: "from-green-500 to-green-600" },
        { name: "API REST", level: 65, icon: FaCode, color: "from-purple-500 to-pink-500" },
        { name: "Firebase", level: 55, icon: SiFirebase, color: "from-yellow-500 to-orange-500" },
        { name: "Supabase", level: 50, icon: SiSupabase, color: "from-green-400 to-emerald-500" },
      ],
    },
    {
      category: "Outils & Workflow",
      icon: FaRocket,
      items: [
        { name: "Git / GitHub", level: 80, icon: FaGitAlt, color: "from-gray-700 to-gray-900" },
        { name: "Figma", level: 70, icon: FaPalette, color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 85, icon: FaCode, color: "from-blue-500 to-blue-600" },
        { name: "Responsive Design", level: 80, icon: FaMobileAlt, color: "from-indigo-500 to-purple-500" },
      ],
    },
  ];

  const categories = ["all", ...skillsData.map(cat => cat.category)];
  
  const filteredSkills = selectedCategory === "all" 
    ? skillsData.flatMap(cat => cat.items)
    : skillsData.find(cat => cat.category === selectedCategory)?.items || [];

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.colors.neutral} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={animations.fadeIn.initial}
          whileInView={animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={animations.fadeIn.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et outils que je maîtrise
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {category === "all" ? "Tout" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de compétences */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-md bg-gradient-to-br ${skill.color} text-white`}>
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}% de maîtrise
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative z-10">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
