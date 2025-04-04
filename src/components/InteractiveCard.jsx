import { useState, useEffect } from "react";

export default function InteractiveCard() {
  const gridSize = 50;
  const cellSize = 20;
  const [visibleCells, setVisibleCells] = useState([]);

  useEffect(() => {
    const visible = Array.from({ length: gridSize * gridSize }).map((_, index) => index);
    setVisibleCells(visible);
  }, []);

  return (
    <svg 
      className="w-full h-screen"
      viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`} 
      preserveAspectRatio="xMidYMid meet"
    >
      {visibleCells.map((index) => {
        const x = (index % gridSize) * cellSize;
        const y = Math.floor(index / gridSize) * cellSize;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            fill="transparent"
            stroke="rgba(200, 200, 200, 0.2)"
            className="transition-all hover:fill-primary/50"
          />
        );
      })}
    </svg>
  );
}
