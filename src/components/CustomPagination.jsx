const CustomPagination = ({ width = 'w-2 h-2', activeIndex, totalSlides, onPaginationClick, display = '', heightHover, borderColor = 'border-text', bgColor = 'bg-text', gap = 'space-x-2', scale = 'scale-125' }) => {
    return (
        <div className="flex justify-center items-center">
            <div className={`border ${borderColor} ${display} rounded-full py-1 px-2 ${gap}`}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onPaginationClick(index)}
                        className={`${width} rounded-full transition-all duration-500 cursor-pointer ${index === activeIndex ? `${bgColor} ${heightHover} ${scale}` : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CustomPagination