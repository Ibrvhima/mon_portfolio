import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaAddressCard, FaPhone, FaGlobe, FaFilePdf } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      // Vérifier si EmailJS est configuré
      if (!window.EMAILJS_CONFIG) {
        throw new Error("EmailJS non configuré. Veuillez configurer email-config.js");
      }

      console.log("Configuration EmailJS:", window.EMAILJS_CONFIG);

      // Initialiser EmailJS
      emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Préparer les données
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };

      console.log("Envoi des données:", templateParams);

      // Envoyer l'email
      const response = await emailjs.send(
        window.EMAILJS_CONFIG.SERVICE_ID,
        window.EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log("Réponse EmailJS:", response);

      // Si tout va bien
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur EmailJS complète:", error);
      setErrorMessage(error.message || "Une erreur est survenue lors de l'envoi. Réessayez.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(90deg, #64748B 1px, transparent 1px), linear-gradient(180deg, #64748B 1px, transparent 1px)",
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto fade-in-up">
        {/* Titre */}
        <div className="relative z-10 text-center mb-12 fade-in-down">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-3"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Une question, un projet ou une idée ? Écrivez-moi directement depuis
            ce formulaire.
          </p>
        </div>

        {/* Card parente */}
        <div className="bg-gray-200/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:gap-8 md:p-8 w-full max-w-full">
          {/* Card Formulaire */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
                  <FaUser className="text-blue-600" /> Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition shadow-sm hover:shadow-md"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
                  <FaEnvelope className="text-blue-600" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition shadow-sm hover:shadow-md"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
                  <FaComment className="text-blue-600" /> Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Écrivez votre message ici…"
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition shadow-sm hover:shadow-md"
                ></textarea>
              </div>

              {/* Bouton */}
              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-lg shadow-blue-200/50"
                >
                  {sending ? "Envoi..." : "Envoyer"}
                </button>

                {submitted && (
                  <p className="text-green-600 font-medium mt-2 animate-fade-in">
                    Merci ! Votre message a été envoyé.
                  </p>
                )}

                {errorMessage && (
                  <p className="text-red-600 font-medium mt-2 animate-fade-in">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Card Coordonnées */}
          <div className="bg-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition fade-in-up">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <FaAddressCard /> Mes Coordonnées
            </h3>

            <div className="flex items-center gap-3 text-gray-700 mb-4">
              <FaEnvelope className="text-blue-600" />
              <span>ibrahimadialloib300@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 mb-4">
              <FaPhone className="text-blue-600" />
              <span>+224 611 537 838</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 mb-4">
              <i className="fa-solid fa-location-dot text-blue-600"></i>
              <span>Sonfonia, Conakry</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 mb-4">
              <FaGlobe className="text-blue-600" />
              <span>Français (courant), Anglais (intermédiaire)</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 mb-4">
              <FaFilePdf className="text-red-600" />
              <a href="/assets/cv.pdf" download className="hover:underline">
                Télécharger mon CV
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/Ibrvhima"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-black transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahima-diallo-749a8a281/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/votreprofil"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-sky-700 transition text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/224611537838"
                target="_blank"
                rel="noreferrer"
                className="text-green-500 hover:text-green-700 transition text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
