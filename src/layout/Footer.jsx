import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-center relative overflow-hidden bg-linear-to-r from-blue-500 to-indigo-600 text-white">
      {/* Dégradé animé en arrière-plan */}
      <div className="absolute inset-0 bg-white/10 animate-gradient-x pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <p className="text-sm md:text-base">
          © 2024 Ibrahima Diallo - Made with <span className="text-red-500">❤️</span> using React.js
        </p>

        {/* Réseaux sociaux */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/ibrvhima"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ibrvhima"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/ibrvhima"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/224611537838"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
