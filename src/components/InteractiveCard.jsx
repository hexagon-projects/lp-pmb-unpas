import { useState, useEffect } from "react";

export default function InteractiveCard() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const cellSize = 30;

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const gridCols = Math.floor(windowSize.width / cellSize);
  const gridRows = Math.floor(windowSize.height / cellSize);
  const totalCells = gridCols * gridRows;
  const visibleCells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SVG Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${gridCols * cellSize} ${gridRows * cellSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {visibleCells.map((index) => {
          const x = (index % gridCols) * cellSize;
          const y = Math.floor(index / gridCols) * cellSize;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={cellSize}
              height={cellSize}
              fill="transparent"
              stroke="rgba(200, 200, 200, 0.13)" // dibuat lebih tipis
              strokeWidth="0.5"
              className="transition-all hover:fill-primary/30"
            />
          );
        })}
      </svg>

      {/* Gradient bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[75vh] bg-gradient-to-t from-[#F3F3F3] to-transparent pointer-events-none" />
    </div>
  );
}