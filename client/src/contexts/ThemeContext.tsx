/**
 * FrançaisFacile+ — Thème « La Classe Parisienne »
 * Le soir (19 h – 6 h), la bibliothèque du soir s'allume toute seule :
 * le site passe en mode sombre « révision du soir » automatiquement.
 * Le choix manuel de l'apprenant prime toujours et reste mémorisé.
 */
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";
// À partir de quelle heure le mode sombre s'active automatiquement
const NIGHT_START_HOUR = 19; // 19 h 00
const NIGHT_END_HOUR = 6; // 6 h 00

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

/** Est-il l'heure de la « bibliothèque du soir » ? */
export function isNightTime(date: Date = new Date()): boolean {
  const h = date.getHours();
  return h >= NIGHT_START_HOUR || h < NIGHT_END_HOUR;
}

/**
 * Thème initial :
 * 1. choix manuel mémorisé (localStorage) prime ;
 * 2. sinon, mode sombre automatique entre 19 h et 6 h (« révision du soir ») ;
 * 3. sinon, thème clair par défaut.
 */
function initialTheme(defaultTheme: Theme): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return isNightTime() ? "dark" : defaultTheme;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => initialTheme(defaultTheme));
  const [manual, setManual] = useState<boolean>(
    () => localStorage.getItem(THEME_KEY) !== null,
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) {
      localStorage.setItem(THEME_KEY, theme);
      setManual(true);
    }
  }, [theme, switchable]);

  // « Révision du soir » : bascule automatique 19 h → 6 h,
  // uniquement si l'apprenant n'a pas fait de choix manuel.
  useEffect(() => {
    if (manual) return;
    const applyTimeBased = () => {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") return; // choix manuel intervenu entre-temps
      setTheme(isNightTime() ? "dark" : defaultTheme);
    };
    applyTimeBased();
    const id = window.setInterval(applyTimeBased, 60 * 1000);
    return () => window.clearInterval(id);
  }, [defaultTheme, manual]);

  const toggleTheme = switchable
    ? () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
