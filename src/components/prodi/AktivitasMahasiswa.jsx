import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import MotionWrapper from '../MotionWrapper'
import Title from '../Title'
import RichText from '../RichText'

const AktivitasMahasiswa = ({ data = [] }) => {
  const [activeCard, setActiveCard] = useState(data[0]?.id || null) // Set first card as active by default
  const [windowWidth, setWindowWidth] = useState(0)
  const imageURL = import.meta.env.VITE_IMAGE_URL

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getCardWidth = (isActive) => {
    if (windowWidth < 640) {
      return isActive ? '90%' : '45%'
    } else if (windowWidth < 1024) {
      return isActive ? '60%' : '30%'
    } else {
      return isActive ? '500px' : '200px'
    }
  }

  const getCardHeight = (isActive) => {
    if (windowWidth < 640) {
      return isActive ? 240 : 240
    } else if (windowWidth < 1024) {
      return isActive ? 340 : 340
    } else {
      return 421
    }
  }

  if (!data || !Array.isArray(data)) {
    return <p className="text-center text-gray-500">No activities available.</p>
  }

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="text-center">
        <Title title="Inovasi" />
      </div>
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 px-2 md:px-0">
        {data.map((card) => (
          <motion.div
            key={card.id}
            className="rounded-xl md:rounded-2xl lg:rounded-4xl relative cursor-pointer p-2 md:p-4 flex flex-col justify-between overflow-hidden"
            animate={{
              width: getCardWidth(activeCard === card.id),
              height: getCardHeight(activeCard === card.id),
            }}
            whileHover={{
              width: activeCard === card.id ? getCardWidth(true) : getCardWidth(false),
              scale: activeCard === card.id ? 1 : 1.05,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${imageURL}/portofolios/${card.image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div
              className="absolute bottom-7 left-7"
              initial={{ opacity: 0, y: 20 }}
              animate={activeCard === card.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: activeCard === card.id ? 0.5 : 0 }}
            >
              {activeCard === card.id && <RichText textColor="text-white" sizeText="text-base md:text-lg lg:text-xl" content={card.description} />}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AktivitasMahasiswa
