"use client";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 15 + 10}s`,
      size: `${Math.random() * 2 + 1}px`,
      endX: Math.random() * 200 - 100,
      endY: Math.random() * 200 - 100,
    }));
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={cn(
            "absolute rounded-full bg-white/30 animate-particle"
          )}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            '--particle-x': p.endX,
            '--particle-y': p.endY,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
