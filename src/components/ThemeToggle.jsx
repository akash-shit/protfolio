import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full hover:bg-accent transition-colors duration-300 focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-900" />
      )}
    </button>
  );
};