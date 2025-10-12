import GlassSurface from "@/components/glass-surface/glass-surface";
import PrismaticBurst from "@/components/home/prismatic-burst";

export default function Home() {
  return (
    <div className="grid">
      <div className="h-screen invert dark:invert-0">
        {/* <Silk /> */}
        {/* <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#f234f0"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.5}
        /> */}
        <PrismaticBurst
          animationType="rotate3d"
          intensity={3}
          speed={0.25}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          rayCount={0}
          mixBlendMode="lighten"
          colors={["#FF6F61", "#FFD54F", "#009688"]}
        />
      </div>
      <div className="absolute start-0 left-0 grid h-screen items-center justify-center px-10">
        <div className="grid max-w-96 gap-8">
          <span className="text-center text-4xl md:text-5xl">
            طراحی وبسایت خود را به ما بسپارید
          </span>
          <div className="grid grid-cols-2 gap-2 text-xl md:text-2xl">
            <GlassSurface className="h-12 rounded-full">ثبت سفارش</GlassSurface>
            <GlassSurface className="h-12 rounded-full">
              چرا سلی وب
            </GlassSurface>
          </div>
        </div>
        <div className="absolute self-end justify-self-end"></div>
      </div>
    </div>
  );
}
