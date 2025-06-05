import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledWrapper = styled.div`
  button {
    width: 100%;

    background-color: ${(props) => props.bgColor || '#EBEBEB'};
    font-family: inherit;
    font-weight: bold;
    border: 2px solid ${(props) => props.borderColor || '#C73929'};
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
   
  
    color: ${(props) => props.textColor || 'black'}; /* Warna awal */


    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  button::before {
    content: '';
    width: 120%;
    height: 120%;
    background-color: ${(props) => props.hoverColor || '#FEF251'};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  
  }

  button:hover {
    color: ${(props) => props.textHoverColor || 'white'}; /* Warna teks saat hover */
  }

  button:hover::before {
    transform: scaleX(1);
  }
`;


const ButtonHoverBaru = ({
  bgColor,
  width,
  onClick,
  text,
  icon,
  borderColor = '#C73929',
  hoverColor = '#FEF251',
  textColor = 'black',
  textHoverColor = 'white',
  iconStatus,
  flex = 'flex-row-reverse',
  fontLg = 'lg:text-md',
  css
}) => {
  return (
    <StyledWrapper
      bgColor={bgColor}
      borderColor={borderColor}
      hoverColor={hoverColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
    >
      <motion.button
        onClick={onClick}
        className={`${flex} text-xs md:text-sm ${fontLg} p-3 md:p-4 lg:p-4 rounded-xl md:rounded-2xl lg:rounded-2xl ${css}`}
        whileTap={{ scale: 0.95 }}
      >
        {text} <span className={`${iconStatus}`}>{icon}</span>
      </motion.button>
    </StyledWrapper>
  );
};

export default ButtonHoverBaru;