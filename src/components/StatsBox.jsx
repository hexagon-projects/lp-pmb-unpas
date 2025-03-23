import { useEffect, useState, useRef } from "react";
import Text from "./Text";

const StatsBox = ({ icon, number, title, colorIcon = 'text-text' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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
        <div ref={ref} className="w-full lg:w-fit flex justify-start md:justify-center items-center gap-4 md:gap-6 lg:gap-8 ">
            <div className="w-[30%] md:w-fit">
                <div className={`w-fit p-3 md:bg-gray-100 rounded-full ${colorIcon} transition md:shadow-xl md:shadow-text/20 md:shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]`}>{icon}</div>
            </div>
            <div className="w-[30%] lg:w-fit flex flex-col">
                <h3 className="text-md md:text-2xl lg:text-3xl font-bold text-black">
                    <span>{count}</span>+
                </h3>
                <Text weight={'font-semibold'} text={title} />
            </div>
        </div>
    );
};

export default StatsBox;
