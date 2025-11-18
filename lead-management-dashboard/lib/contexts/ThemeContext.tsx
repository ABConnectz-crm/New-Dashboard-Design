"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "purple" | "blue" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("purple");

  useEffect(() => {
    const savedTheme = localStorage.getItem("dashboard-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard-theme", theme);
    const root = document.documentElement;

    // Remove all theme classes
    root.removeAttribute("data-theme");

    // Add the selected theme
    if (theme !== "purple") {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
