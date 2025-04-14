import { useEffect, useState, useRef } from "react";
import Text from "../Text";

const StatsBoxProdi = ({ icon, number, title, colorIcon = 'text-text' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isHex = colorIcon.startsWith('#');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = parseInt(number);
        if (start === end) return;

        const duration = 2000;
        const incrementTime = 30;
        const step = Math.ceil((end - start) / (duration / incrementTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isVisible, number]);

    return (
        <div ref={ref} className="w-full lg:w-fit flex justify-start md:justify-center items-center gap-1 md:gap-6 lg:gap-6 border-2 border-[#fafafa] md:border-none rounded-lg md:rounded-xl lg:rounded-2xl">
            <div className="w-[30%] md:w-fit">
                <div
                    className={`w-fit p-3 md:bg-[#f0f0f0] md:border-2 md:border-[#fafafa] md:rounded-full ${!isHex ? colorIcon : ''} transition ${!isHex
                            ? 'md:shadow-text/10' // Changed from 20 to 10 for lower opacity
                            : 'md:[box-shadow:0px_15px_30px_-10px_rgba(var(--shadow-rgb),0.5)]' // Added opacity control
                        }`}
                    style={{
                        color: isHex ? colorIcon : undefined,
                        ...(isHex && { 
                            '--shadow-rgb': hexToRgb(colorIcon).join(',') // Convert hex to RGB for opacity control
                        }),
                    }}
                >{icon}</div>
            </div>
            <div className="w-[100%] lg:w-fit flex flex-col box-border">
                <h3
                    className="text-md md:text-2xl lg:text-3xl font-bold"
                    style={{ color: isHex ? colorIcon : (colorIcon.startsWith('text-') ? colorIcon : `text-${colorIcon}`) }}
                >
                    <span>{count}</span>+
                </h3>
                <Text
                    weight={'font-semibold'}
                    text={title}
                    color={{ color: isHex ? colorIcon : (colorIcon.startsWith('text-') ? colorIcon : `text-${colorIcon}`) }}
                />
            </div>
        </div>
    );
};

// Helper function to convert hex to RGB
function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse r, g, b values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}

export default StatsBoxProdi;