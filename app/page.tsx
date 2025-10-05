import GlassSurface from "@/components/glass-surface/glass-surface";
import { Loop } from "@/components/Logos";
import Silk from "@/components/silk/silk";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid">
      <div className="h-screen invert dark:invert-0">
        <Silk />
      </div>
      <div className="absolute start-0 left-0 grid h-screen items-center justify-center px-20">
        <div className="grid max-w-96 gap-4">
          <span className="text-center text-7xl">
            سفارش وبسایت را به ما بسپارید
          </span>
          <div className="grid grid-cols-2 gap-2">
            <Button className="h-12 rounded-full text-2xl">ثبت سفارش</Button>
            <Button variant={"outline"} className="h-12 rounded-full text-2xl">
              نمونه
            </Button>
          </div>
        </div>
        <div className="absolute self-end justify-self-end">
          <Loop />
        </div>
      </div>
    </div>
  );
}
