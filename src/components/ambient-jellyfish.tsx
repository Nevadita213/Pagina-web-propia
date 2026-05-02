import type { CSSProperties } from "react";

const particles = [
  { x: "8%", y: "18%", s: "0.78", d: "0s", t: "19s", c: "aqua" },
  { x: "19%", y: "68%", s: "0.54", d: "-7s", t: "24s", c: "coral" },
  { x: "34%", y: "30%", s: "0.62", d: "-12s", t: "22s", c: "aqua" },
  { x: "51%", y: "78%", s: "0.48", d: "-4s", t: "26s", c: "lime" },
  { x: "66%", y: "22%", s: "0.7", d: "-15s", t: "21s", c: "coral" },
  { x: "82%", y: "58%", s: "0.56", d: "-9s", t: "25s", c: "aqua" },
  { x: "92%", y: "16%", s: "0.46", d: "-18s", t: "23s", c: "lime" },
];

type AmbientJellyfishProps = {
  className?: string;
  density?: "soft" | "nav";
};

export function AmbientJellyfish({ className = "", density = "soft" }: AmbientJellyfishProps) {
  const visibleParticles = density === "nav" ? particles.slice(0, 5) : particles;

  return (
    <div className={`ambient-jellyfish ambient-jellyfish--${density} ${className}`} aria-hidden>
      {visibleParticles.map((particle, index) => (
        <span
          key={`${particle.x}-${particle.y}`}
          className={`ambient-jellyfish__item ambient-jellyfish__item--${particle.c}`}
          style={
            {
              "--jelly-x": particle.x,
              "--jelly-y": particle.y,
              "--jelly-scale": particle.s,
              "--jelly-delay": particle.d,
              "--jelly-time": particle.t,
              "--jelly-drift": index % 2 === 0 ? "18px" : "-16px",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
