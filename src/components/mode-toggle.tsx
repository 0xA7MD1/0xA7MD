"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="icon-button theme-toggle"
      aria-label="تبديل المظهر الفاتح والداكن"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun size={18} className="sun-icon" aria-hidden="true" />
      <Moon size={18} className="moon-icon" aria-hidden="true" />
    </button>
  );
}
