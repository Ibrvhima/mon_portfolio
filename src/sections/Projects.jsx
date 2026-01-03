import React from "react";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Une sélection de projets illustrant mes compétences en développement web.
          </p>
        </div>

        {/* Grille */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100} // délai progressif 0ms, 100ms, 200ms...
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay avec icônes */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-700 text-sm mb-3">
                  {project.shortDescription}
                </p>

                {/* Labels */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.labels.map((label, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
