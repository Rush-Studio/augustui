"use client";
import LuminousVeil from "../augustui/luminous-veil";
import { useTheme } from "next-themes";

export default function LuminousVeilDemo() {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center">
      <LuminousVeil
        intensity="strong"
        className="rounded-xl"
        theme={
          theme === "light" ? "light" : theme === "dark" ? "dark" : "system"
        }
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Luminous Veil</h1>
        <p className="text-sm text-muted-foreground">
          Subtle beams, timeless elegance.
        </p>
      </div>
    </div>
  );
}
