"use client";

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  rotation: number;
}

function generateFlowers(): Flower[] {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 12,
    size: 12 + Math.random() * 16,
    opacity: 0.3 + Math.random() * 0.4,
    rotation: Math.random() * 360,
  }));
}

export default function FallingFlowers() {
  const flowers = generateFlowers();

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {flowers.map((f) => (
        <svg
          key={f.id}
          className="absolute"
          style={{
            left: `${f.left}%`,
            top: "-40px",
            animation: `fall ${f.duration}s linear ${f.delay}s infinite`,
            opacity: f.opacity,
          }}
          width={f.size}
          height={f.size}
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4 C24 12 36 16 28 20 C36 24 24 28 20 36 C16 28 4 24 12 20 C4 16 16 12 20 4Z"
            fill="#EAA6B6"
          />
          <circle cx="20" cy="20" r="5" fill="#FFF8F0" />
        </svg>
      ))}
    </div>
  );
}
