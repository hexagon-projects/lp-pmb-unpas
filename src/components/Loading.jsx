import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <StyledWrapper>
        <div className="loader">
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    --color: #FEF251;
    --animation: 1.6s ease-in-out infinite;
  }

  .circle {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 10px;
    animation: circle-keys var(--animation);
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--color);
    animation: dot-keys var(--animation);
    z-index: 2;
  }

  .outline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline-color: yellow;
    z-index: 1;
  }

  /* Faster animation delays */
  .circle:nth-child(1) { animation-delay: 0s; }
  .circle:nth-child(2) { animation-delay: 0.2s; }
  .circle:nth-child(3) { animation-delay: 0.4s; }
  .circle:nth-child(4) { animation-delay: 0.6s; }

  .circle:nth-child(1) .dot { animation-delay: 0s; }
  .circle:nth-child(2) .dot { animation-delay: 0.2s; }
  .circle:nth-child(3) .dot { animation-delay: 0.4s; }
  .circle:nth-child(4) .dot { animation-delay: 0.6s; }

  .circle:nth-child(1) .outline { animation-delay: 0.2s; }
  .circle:nth-child(2) .outline { animation-delay: 0.4s; }
  .circle:nth-child(3) .outline { animation-delay: 0.6s; }
  .circle:nth-child(4) .outline { animation-delay: 0.8s; }

  @keyframes circle-keys {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      opacity: 0.6;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes dot-keys {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes outline-keys {
    0% {
      transform: translate(-50%, -50%) scale(0);
      box-shadow: 0 0 0 0 var(--outline-color);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 0 20px transparent;
      opacity: 0;
    }
  }
`;

export default Loading;