import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      {/* Dégradé animé en arrière-plan */}
      <div className="absolute inset-0 bg-white/10 animate-gradient-x pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <p className="text-sm md:text-base">
          © {currentYear} Ibrahima Diallo - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
