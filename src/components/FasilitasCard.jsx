import { useState, useRef, useEffect } from "react";

const FasilitasCard = ({ image, title, height = 'h-52 md:h-64 lg:h-[60vh]', index }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loaded) {
              const img = new Image();
              img.src = `${imageURL}/facilities/${image}`;
              img.onload = () => {
                if (imgRef.current) {
                  imgRef.current.src = img.src;
                  setLoaded(true);
                }
              };
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '200px 0px' }
      );

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current.parentElement);
      }
    } else {
      const img = new Image();
      img.src = `${imageURL}/facilities/${image}`;
      img.onload = () => setLoaded(true);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [image, imageURL, loaded]);

  return (
    <div className={`relative w-full ${height} rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden group`}>
      <div className="absolute inset-0">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
        )}

        <img
          ref={imgRef}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#D3C61D]/100 via-[#C5B91B40]/25 to-transparent"></div>

      <h3 className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-semibold text-left">
        {title}
      </h3>
    </div>
  );
};

export default FasilitasCard;