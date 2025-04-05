import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import { MdOutlineArrowOutward } from "react-icons/md"

const FakultasCard = ({ image, title, slug }) => {
  const navigate = useNavigate()
  const imageURL = import.meta.env.VITE_IMAGE_URL
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  const handleClick = () => navigate(`/fakultas/${slug}`)

  const handleImageLoad = () => setLoaded(true)

  return (
    <div
      className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] rounded-lg md:rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 z-0">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse" />
        )}
        
        <img
          ref={imgRef}
          src={`${imageURL}/fakultas/${image}`}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#D3C61D]/100 via-[#C5B91B40]/25 to-transparent" />
      </div>

      <div className="absolute bottom-2 w-full flex items-end justify-between p-4">
        <h3 className="text-white text-2xl w-[140px] lg:w-[75%] font-semibold">
          {title}
        </h3>

        <div className="bg-white p-2 rounded-xl">
          <MdOutlineArrowOutward size={30} className="text-text" />
        </div>
      </div>
    </div>
  )
}

export default FakultasCard