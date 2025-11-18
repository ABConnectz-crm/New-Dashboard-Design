import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Modern Pastel (Primary - inspired by screenshot #3)
        pastel: {
          purple: "#6A4DF4",
          "purple-light": "#8B7EF7",
          "purple-dark": "#5339D9",
          yellow: "#FDCB50",
          "yellow-light": "#FFE494",
          sky: "#58C6F5",
          "sky-light": "#8ED9F8",
          orange: "#FF9770",
          coral: "#FF8BA0",
          background: "#F5F6FA",
          card: "#FFFFFF",
          text: "#2D3142",
          "text-light": "#6C757D",
        },
        // Theme 2: Gradient Analytics
        analytics: {
          dark: "#0F1015",
          "dark-light": "#1A1D29",
          pink: "#FF6B9D",
          orange: "#FF8F6B",
          purple: "#A78BFA",
          blue: "#60A5FA",
          background: "#1A1D29",
          card: "#252837",
          text: "#FFFFFF",
          "text-light": "#9CA3AF",
        },
        // Theme 3: Minimal Enterprise
        minimal: {
          blue: "#4F46E5",
          "blue-light": "#818CF8",
          purple: "#7C3AED",
          "purple-light": "#A78BFA",
          gray: "#F9FAFB",
          "gray-dark": "#E5E7EB",
          background: "#FFFFFF",
          card: "#F9FAFB",
          text: "#111827",
          "text-light": "#6B7280",
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'neumorphic': '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.5)',
        'neumorphic-inset': 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
