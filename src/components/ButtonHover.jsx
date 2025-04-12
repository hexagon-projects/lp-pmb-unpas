import styled from 'styled-components';

const ButtonHover = ({onClick, text, icon}) => {
    const StyledWrapper = styled.div`
        button {
            width: 100%;
            height: 3em;
            font-size: 12px;
            font-family: inherit;
            font-weight: bold;
            border: 2px solid #C73929;
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
            background-image: linear-gradient(to right, #FEF251 0%, #FEF251 100%);
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
            <button onClick={onClick} className='flex-row-reverse'>
                {text} <span>{icon}</span>
            </button>
        </StyledWrapper>
    )
}

export default ButtonHover