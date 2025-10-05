"use client";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import GlassSurface from "./glass-surface/glass-surface";
import { ThemeToggle } from "./ui/theme-toggle";
import { ShoppingBag } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconInnerShadowTop } from "@tabler/icons-react";
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
      <nav className="flex w-full items-center justify-between gap-2 p-4">
        <SidebarTrigger />
        <GlassSurface className="grid max-w-96 grow justify-between ">
            <Button variant={"link"} className="rounded-full">
              تعرفه
            </Button>
            <Button variant={"link"} className="rounded-full">
              سفارش
            </Button>
        </GlassSurface>
        <ThemeToggle />
      </nav>
    </motion.div>
  );
}
