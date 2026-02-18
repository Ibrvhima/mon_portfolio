export const theme = {
  colors: {
    primary: "#2563EB", // Bleu professionnel
    primaryDark: "#1D4ED8",
    secondary: "#3B82F6", // Bleu clair
    accent: "#10B981", // Vert émeraude pour contrastes
    warning: "#F59E0B", // Orange pour CTA
    neutral: "#6B7280", // Gris doux
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F8FAFC",
    textSecondary: "#E2E8F0",
    textMuted: "#94A3B8", // Pour contraste optimal
    gradient: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
    gradientHover: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    accentGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
  },
  typography: {
    fontFamily: {
      display: ["Inter Variable", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"]
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    }
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem"
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    glow: "0 0 20px rgba(99, 102, 241, 0.3)",
    glowHover: "0 0 30px rgba(99, 102, 241, 0.5)"
  },
  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out"
  }
}

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  },
  hover: {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  },
  cardHover: {
    whileHover: { 
      y: -10, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3 }
    }
  }
}
