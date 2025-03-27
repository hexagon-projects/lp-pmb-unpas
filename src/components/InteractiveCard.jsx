import { useState, useEffect } from "react";

export default function InteractiveGrid() {
  const gridSize = 50;
  const [visibleCells, setVisibleCells] = useState([]);

  useEffect(() => {
    const visible = Array.from({ length: gridSize * gridSize }).map((_, index) => index);
    setVisibleCells(visible);
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-10 md:grid-cols-20 lg:grid-cols-50">
      {visibleCells.map((index) => (
        <div
          key={index}
          className="border border-gray-200/20 transition-all hover:bg-primary/50 bg-transparent"
          style={{
            width: "20px", 
            height: "20px",
          }}
        ></div>
      ))}
    </div>
  );
}
