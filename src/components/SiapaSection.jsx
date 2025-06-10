import { useState, useEffect, useRef } from 'react'
import Check from "../assets/icon/check.png"

const SiapaSection = ({ data, title = "Siapa Yang Bisa Daftar?", subtitle }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleItems, setVisibleItems] = useState([])
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate items one by one with delay
                    data.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...prev, index])
                        }, index * 200) // 200ms delay between each item
                    })
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [data])

    return (
        <div ref={sectionRef} className="px-[20px] py-[40px] md:p-[40px] lg:px-[120px] lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-20">
            <div className='space-y-2 md:space-y-4'>
                <h2 className={`text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>{title}</h2>
                <p className='text-[14px] md:text-[16px] lg:text-[22px] text-center'>{subtitle}</p>
            </div>
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 cta_container hidden">
                {data.map((item, index) => (
                    <div key={index} className={`h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-[#341D12] shadow-primary/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] group text-white rounded-[8px] md:rounded-[8px] lg:rounded-[16px] siapa-box relative bg-cover bg-center bg-no-repeat transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundImage: `url(${item.img})` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent rounded-[8px] md:rounded-[8px] lg:rounded-[16px]"></div>
                        <div className="relative z-2 w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                            <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain group-hover:scale-105 transition-all duration-500" />
                        </div>
                        <p className="relative z-2 text-[16px] md:text-[20px] lg:text-[24px] font-bold">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 md:hidden">
                {data.map((item, index) => (
                    <div key={index} className={`relative h-[24vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-[#341D12] shadow-primary/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] group text-white rounded-[8px] md:rounded-[8px] lg:rounded-[16px] bg-cover bg-center bg-no-repeat transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundImage: `url(${item.img})` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent rounded-[16px] md:rounded-[8px] lg:rounded-[16px]"></div>
                        <div className="relative z-2 w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                            <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                        </div>
                        <p className="relative z-2 text-[16px] md:text-[20px] lg:text-[24px] font-bold">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SiapaSection