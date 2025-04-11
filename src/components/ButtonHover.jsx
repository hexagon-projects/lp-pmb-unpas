import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonHover = ({ onClick, text, icon, color, borderColor = '#C73929', bgColor = '#FEF251', iconStatus, flex = 'flex-row-reverse' }) => {
    const StyledWrapper = styled.div`
        button {
            width: 100%;
            height: 3em;
            background-color: ${color};
            font-size: 12px;
            font-family: inherit;
            font-weight: bold;
            border: 2px solid ${borderColor};
            position: relative;
            overflow: hidden;
            z-index: 1;
            cursor: pointer;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 1.5rem;
            transition: all 0.5s ease;
            
            border-radius: 0.5rem;
            @media (min-width: 768px) {
                border-radius: 0.75rem;
            }
            @media (min-width: 1024px) {
                border-radius: 1rem;
            }
            
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                        0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        button::before {
            content: '';
            width: 0;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(to right, ${bgColor} 0%, ${bgColor} 100%);
            transition: .5s ease;
            display: block;
            z-index: -1;
            
            border-radius: 0.5rem;
            @media (min-width: 768px) {
                border-radius: 0.75rem;
            }
            @media (min-width: 1024px) {
                border-radius: 1rem;
            }
        }

        button:hover::before {
            width: 100%;
        }`;

    return (
        <StyledWrapper>
            <motion.button onClick={onClick} className={`${flex} text-xs md:text-sm lg:text-sm`} whileTap={{ scale: 0.95 }}>
                {text} <span className={`${iconStatus}`}>{icon}</span>
            </motion.button>
        </StyledWrapper>
    )
}

export default ButtonHover