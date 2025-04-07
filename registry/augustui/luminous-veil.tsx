"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LuminousVeilProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  theme?: "light" | "dark" | "system";
}

interface Veil {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createVeil(width: number, height: number): Veil {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export default function LuminousVeil({
  className,
  intensity = "strong",
  theme = "system",
}: LuminousVeilProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const veilsRef = useRef<Veil[]>([]);
  const animationFrameRef = useRef<number>(0);
  const MINIMUM_VEILS = 20;

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  };

  // Determine background color based on theme prop
  const getBackgroundClass = () => {
    if (theme === "light") return "bg-white";
    if (theme === "dark") return "bg-black";
    return "bg-background"; // System theme (uses CSS variables)
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const container = canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      const isMobile = rect.width < 768;
      const totalVeils = MINIMUM_VEILS * (isMobile ? 1 : 1.5);
      veilsRef.current = Array.from({ length: totalVeils }, () =>
        createVeil(canvas.width, canvas.height),
      );
    };

    updateCanvasSize();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCanvasSize, 100);
    };

    // Use ResizeObserver to detect parent size changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    ctx.filter = "blur(0px)";

    function resetVeil(veil: Veil, index: number, totalVeils: number) {
      if (!canvas) return veil;

      const column = index % 3;
      const spacing = canvas.width / 3;

      veil.y = canvas.height + 100;
      veil.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      veil.width = 100 + Math.random() * 100;
      veil.speed = 0.5 + Math.random() * 0.4;
      veil.hue = 190 + (index * 70) / totalVeils;
      veil.opacity = 0.2 + Math.random() * 0.1;
      return veil;
    }

    function drawVeil(ctx: CanvasRenderingContext2D, veil: Veil) {
      ctx.save();
      ctx.translate(veil.x, veil.y);
      ctx.rotate((veil.angle * Math.PI) / 180);

      const pulsingOpacity =
        veil.opacity *
        (0.8 + Math.sin(veil.pulse) * 0.2) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, veil.length);

      gradient.addColorStop(0, `hsla(${veil.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${veil.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      );
      gradient.addColorStop(
        0.4,
        `hsla(${veil.hue}, 85%, 65%, ${pulsingOpacity})`,
      );
      gradient.addColorStop(
        0.6,
        `hsla(${veil.hue}, 85%, 65%, ${pulsingOpacity})`,
      );
      gradient.addColorStop(
        0.9,
        `hsla(${veil.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      );
      gradient.addColorStop(1, `hsla(${veil.hue}, 85%, 65%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-veil.width / 2, 0, veil.width, veil.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;

      // Set background color based on theme
      if (theme === "light") {
        ctx.fillStyle = "#ffffff";
      } else if (theme === "dark") {
        ctx.fillStyle = "#000000";
      } else {
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue("--background")
          .trim();
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const totalVeils = veilsRef.current.length;
      veilsRef.current.forEach((veil, index) => {
        veil.y -= veil.speed;
        veil.pulse += veil.pulseSpeed;

        if (veil.y + veil.length < -100) {
          resetVeil(veil, index, totalVeils);
        }

        drawVeil(ctx, veil);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intensity, theme]);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 size-full overflow-hidden",
        getBackgroundClass(),
        className,
      )}
      style={{
        backgroundColor:
          theme === "light" ? "white" : theme === "dark" ? "black" : "",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: "blur(15px)" }}
      />

      <motion.div
        className={cn("absolute inset-0 size-full", getBackgroundClass())}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(50px)",
          backgroundColor:
            theme === "light" ? "white" : theme === "dark" ? "black" : "",
        }}
      />
    </div>
  );
}
