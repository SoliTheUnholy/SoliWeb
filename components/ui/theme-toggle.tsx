"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import GlassSurface from "../glass-surface/glass-surface";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<GlassSurface className="aspect-square">
			<div
				className="relative size-12 items-center justify-center flex"
				onClick={() => {
					if (theme !== "dark") {
						setTheme("dark");
					} else {
						setTheme("light");
					}
				}}>
				<Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<Moon className="absolute self-center h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span className="sr-only">Toggle theme</span>
			</div>
		</GlassSurface>
	);
}
