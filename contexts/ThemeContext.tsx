"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'pastel' | 'analytics' | 'minimal';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('pastel');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('erp-theme') as ThemeType;
    if (savedTheme && ['pastel', 'analytics', 'minimal'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and update document
    localStorage.setItem('erp-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Update body background based on theme
    const backgrounds = {
      pastel: '#F5F6FA',
      analytics: '#1A1D29',
      minimal: '#FFFFFF',
    };
    document.body.style.backgroundColor = backgrounds[theme];
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
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
