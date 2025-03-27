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
    <div
      className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] cursor-pointer group"
      onClick={handleClick}
      style={{ willChange: 'transform' }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
      )}
      
      <LazyLoadImage
        src={`${imageURL}/fakultas/${image}`}
        alt={title}
        effect="blur"
        width="100%"
        height="100%"
        className="w-full h-full object-cover transition-transform duration-500"
        wrapperClassName="w-full h-full"
        afterLoad={() => setLoaded(true)}
        loading={priority === "high" ? "eager" : "lazy"}
        decoding={priority === "high" ? "sync" : "async"}
        fetchpriority={priority}
        threshold={200}
      />

      <motion.h3
        className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white text-2xl w-[140px] lg:w-[75%] font-semibold"
        initial={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white p-2 rounded-xl"
        whileHover={{ scale: 1.1, rotate: 45 }} 
        transition={{ duration: 0.2 }}
      >
        <MdOutlineArrowOutward size={30} className="text-text" />
      </motion.div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary/20 to-transparent"></div>
    </div>
  )
}

export default FakultasCard