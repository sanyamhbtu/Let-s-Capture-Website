// components/Particles.tsx
"use client";
import React, { useState, useEffect } from "react";

const Particles = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true); // mark component as mounted
    const arr = Array.from({ length: 20 }, (_, i) => i);
    setParticles(arr);
  }, []);

  if (!mounted) return null; // don't render on server

  return (
    <div className="particles">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: Math.random() * 10 + 's',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
