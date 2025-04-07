"use client";
import TectonicWaves from "../augustui/tectonic-waves";
import { useTheme } from "next-themes";

export default function TectonicWavesDemo() {
  const { theme } = useTheme();
  return (
    <div className="relative flex min-h-[350px] w-full">
      <TectonicWaves
        lineColor={theme === "dark" ? "white" : "black"}
        backgroundColor={theme === "dark" ? "black" : "white"}
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        xGap={12}
        yGap={36}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">Tectonic Waves</p>
        <p className="text-sm text-muted-foreground">
          Fluid motion, grounded strength.
        </p>
      </div>
    </div>
  );
}
