"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import GlassSurface from "../glass-surface/glass-surface";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
    <GlassSurface className="aspect-square hover:cursor-pointer">
      <div
        className="relative flex size-12 items-center justify-center"
        onClick={() => {
          if (theme !== "dark") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-5 w-5 scale-0 rotate-90 self-center transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </div>
    </GlassSurface>
  );
}
