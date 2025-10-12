"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import GlassSurface from "./glass-surface/glass-surface";
import { ThemeToggle } from "./ui/theme-toggle";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
export function SiteHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <motion.div
      ref={ref}
      animate={{
        width: visible ? "fit-content" : "100%",
        scale: visible ? "80%" : "100%",
      }}
      transition={{
        type: "keyframes",
      }}
      className={cn(
        "sticky top-2 z-40 mx-auto h-0 flex-row items-center justify-between gap-2 rounded-full",
      )}
    >
      <nav className="flex w-full items-center justify-between gap-2 p-4 ">
        <SidebarTrigger />
        <GlassSurface className="w-full h-12 max-w-96 p-2 grid-cols-3 justify-between">
          <GlassSurface className="h-8 rounded-full">تعرفه</GlassSurface>
          <GlassSurface className="h-8 rounded-full">سفارش</GlassSurface>
          <GlassSurface className="h-8 rounded-full">درباره ما</GlassSurface>
        </GlassSurface>
        <ThemeToggle />
      </nav>
    </motion.div>
  );
}
