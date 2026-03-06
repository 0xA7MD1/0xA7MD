"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(className)}
      onClick={toggleTheme}
    >
      <div className="relative size-[1.2rem]">
        <SunIcon className="absolute inset-0 h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-800 dark:text-neutral-200" />
        <MoonIcon className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-800 dark:text-neutral-200" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
