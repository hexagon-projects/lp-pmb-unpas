export default function InteractiveGrid() {
    const gridSize = 50; // Adjust grid size
    const totalCells = gridSize * gridSize;
  
    return (
      <div className="w-full h-full grid grid-cols-50">
        {Array.from({ length: totalCells }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200/20 transition-all hover:bg-primary bg-transparent"
          ></div>
        ))}
      </div>
    );
  }
  