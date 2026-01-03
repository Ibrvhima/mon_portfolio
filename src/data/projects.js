// src/data/projects.js
import solidactImg from "../assets/images/solidact.png";
import faleImg from "../assets/images/fale.png";
import smartbankImg from "../assets/images/smartbank.png";

export const projects = [
  {
    id: 1,
    title: "Solidact",
    shortDescription: "Plateforme numérique de bénévolat.",
    description:
      "Solidact facilite la rencontre entre bénévoles et associations. Quelques clics suffisent pour trouver une cause qui vous parle et commencer à faire la différence dans votre communauté.",
    image: solidactImg,
    labels: ["Fullstack", "Personnel"],
    technologies: ["Next + TypeScript", "TailwindCSS", "Supabase"],
    live: "https://github.com/Ibrvhima",
    github: "https://github.com/Ibrvhima",
  },
  {
    id: 2,
    title: "Falé",
    shortDescription: "Plateforme citoyenne jeunesse-gouvernement",
    description:
      "Application qui sert d'intermédiaire entre les idées constructives de la jeunesse et les autorités.",
    image: faleImg,
    labels: ["Full-stack", "Projet"],
    technologies: ["Next Js", "TypeScript", "TailwindCSS", "Firebase"],
    live: "https://github.com/1000TechLeaders/Fale",
    github: "https://github.com/1000TechLeaders/Fale",
  },
  {
    id: 3,
    title: "SmartBank",
    shortDescription: "Application Web de gestion d'épargne (en cours)",
    description:
      "Application qui va nous faciliter l'épargne d'argent sécurisée et flexible.",
    image: smartbankImg,
    labels: ["Full-stack", "Projet Personnel"],
    technologies: ["Next Js", "TypeScript", "TailwindCSS", "Django"],
    live: "https://github.com/Ibrvhima",
    github: "https://github.com/Ibrvhima",
  },
];
