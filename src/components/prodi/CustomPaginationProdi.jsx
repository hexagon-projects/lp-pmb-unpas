const CustomPaginationProdi = ({ 
    width = 'w-2 h-2', 
    activeIndex, 
    totalSlides, 
    onPaginationClick, 
    display = '', 
    heightHover, 
    borderColor = '#C73929', 
    bgColor = '#C73929', 
    gap = 'gap-2', 
    scale = 'scale-125' 
  }) => {
    return (
      <div className="flex justify-center items-center">
        <div 
          className={`flex justify-center items-center border ${display} rounded-full py-2 px-2 ${gap}`} 
          style={{ borderColor: borderColor }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => onPaginationClick(index)}
              className={`${width} rounded-full transition-all duration-500 cursor-pointer ${index === activeIndex ? `${heightHover} ${scale}` : "bg-gray-300"}`}
              style={{ 
                backgroundColor: index === activeIndex ? bgColor : undefined 
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomPaginationProdi;