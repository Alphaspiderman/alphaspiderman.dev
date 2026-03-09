"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEME_KEY = "site:theme";
const DEFAULT_THEME: "light" | "dark" = "light";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") return stored;
      else {
        // If no stored theme, use system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        return prefersDark ? "dark" : "light";
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_THEME;
  });

  // Apply theme and persist when it changes
  useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark",
    );
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
    // notify same-window listeners if needed
    window.dispatchEvent(new CustomEvent("theme:change", { detail: theme }));
  }, [theme]);

  // Listen for storage changes from other tabs/windows
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === THEME_KEY &&
        (e.newValue === "dark" || e.newValue === "light")
      ) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
