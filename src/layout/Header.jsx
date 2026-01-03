import React, { useState, useEffect, useContext } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const { dark, toggleTheme } = useContext(ThemeContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="text-2xl text-white font-semibold">
          Ibrahima
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.substring(1)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
          >
            Me contacter
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-white"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Open menu"
        >
          {isOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sliding menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            <hr className="border-gray-300 dark:border-gray-700" />

            <div className="flex flex-col gap-4 mt-2">
              <button
                onClick={() => {
                  toggleTheme && toggleTheme();
                }}
                className="flex items-center justify-center p-3 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Me contacter
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
