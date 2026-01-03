import React from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { useGithubRepos } from "../hooks/useGithubRepos";

const GitHub = () => {
  const { repos, loading, error } = useGithubRepos();

  return (
    <section id="github" className="py-24 px-6 relative">
      {/* Dégradé animé en arrière-plan */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 via-white/30 to-blue-400/30 animate-gradient-x pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">
            Mes Repositories GitHub
          </h2>
          <p className="text-gray-600 mt-4">
            Découvrez mes derniers projets open-source et contributions
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Chargement des repositories...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 font-medium mb-6">{error}</p>
        )}

        {/* Repos */}
        {!loading && !error && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100} // animation en cascade
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{repo.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {repo.description || "Aucune description fournie."}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{repo.language || "N/A"}</span>

                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="text-gray-500" /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Lien GitHub */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay={repos.length * 100}>
          <a
            href="https://github.com/ibrvhima"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-medium hover:underline text-lg"
          >
            Voir tous mes repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
