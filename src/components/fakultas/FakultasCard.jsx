import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { MdOutlineArrowOutward } from "react-icons/md"
import { useState, useCallback } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const FakultasCard = ({ image, title, slug, priority = "low" }) => {
  const navigate = useNavigate()
  const imageURL = import.meta.env.VITE_IMAGE_URL
  const [loaded, setLoaded] = useState(false)

  const handleClick = useCallback(() => {
    navigate(`/fakultas/${slug}`)
  }, [navigate, slug])

  return (
    <motion.div
      className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] cursor-pointer group"
      onClick={handleClick}
      style={{ willChange: 'transform' }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="absolute inset-0 z-0">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse z-0"></div>
        )}
        
        <LazyLoadImage
          src={`${imageURL}/fakultas/${image}`}
          alt={title}
          effect="blur"
          width="100%"
          height="100%"
          className="w-full h-full object-cover transition-transform duration-300 z-0"
          wrapperClassName="w-full h-full"
          afterLoad={() => {
            setLoaded(true)
            requestAnimationFrame(() => {
              document.body.getBoundingClientRect()
            })
          }}
          loading={priority === "high" ? "eager" : "lazy"}
          decoding={priority === "high" ? "sync" : "async"}
          fetchpriority={priority}
          threshold={300}
        />

        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#D3C61D]/100 via-[#D3C61D]/10 to-transparent z-1"></div>
      </div>

      <div className="absolute z-2 w-full flex items-center justify-between p-4 bottom-2">
        <motion.h3
          className="text-white text-2xl w-[140px] lg:w-[75%] font-semibold"
          initial={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className=" bg-white p-2 rounded-xl"
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <MdOutlineArrowOutward size={30} className="text-text" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FakultasCard