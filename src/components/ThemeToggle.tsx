import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggle = () => {
    if (busy) return;
    setBusy(true);
    const next = currentTheme === "dark" ? "light" : "dark";
    const el = document.documentElement;

    // Start overlay fade-in
    el.classList.add("theme-flash");

    // Change theme at peak opacity
    setTimeout(() => {
      setTheme(next);
    }, 160);

    // Fade overlay out
    setTimeout(() => {
      el.classList.remove("theme-flash");
    }, 360);

    // Clear busy state shortly after
    setTimeout(() => setBusy(false), 520);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label="Toggle color theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;