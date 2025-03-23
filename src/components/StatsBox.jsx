import { useEffect, useState, useRef } from "react";
import Text from "./Text";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const StatsBox = ({ icon, number, title }) => {
=======
const StatsBox = ({ icon, number, title, colorIcon = 'text-text' }) => {
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
const StatsBox = ({ icon, number, title, colorIcon = 'text-text' }) => {
>>>>>>> 8bbe4dc (First Commit)
=======
const StatsBox = ({ icon, number, title, colorIcon = 'text-text' }) => {
>>>>>>> origin/Budi
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div ref={ref} className="w-full flex justify-center items-center gap-2 md:gap-5 ">
            <div className="w-10 ">{icon}</div>
            <div className="w-1/2 md:w-full flex flex-col ">
                <h3 className="text-md md:text-2xl lg:text-3xl font-bold text-stats">
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        <div ref={ref} className="w-full flex justify-center items-center gap-4 md:gap-6 ">
            <div className={`w-fit p-3 bg-gray-100 rounded-full ${colorIcon} transition shadow-lg shadow-text/20 shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]`}>{icon}</div>
            <div className="w-1/2 md:w-full flex flex-col ">
                <h3 className="text-md md:text-2xl lg:text-3xl font-bold text-black">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                    <span>{count}</span>+
                </h3>
                <Text text={title} />
            </div>
        </div>
    );
};

export default StatsBox;
