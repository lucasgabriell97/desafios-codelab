import styled from "styled-components";

interface GameProps {
  $pairs: number;
}

export const Game = styled.section<GameProps>`
  display: grid;
  grid-template-columns: ${({ $pairs }) =>
    $pairs === 9 
      ? `repeat(${Math.ceil(Math.sqrt($pairs * 3))}, 1fr)`
      : `repeat(${Math.ceil(Math.sqrt($pairs * 2))}, 1fr)`
    };
  gap: 2rem;

  @media (width <= 1024px) {
    grid-template-columns: ${({ $pairs }) => `repeat(${Math.ceil(Math.sqrt($pairs * 2))}, 1fr)`};
    gap: 1.5rem
  }

  @media (width <= 768px) {
    grid-template-columns: ${({ $pairs }) => `repeat(${Math.ceil(Math.sqrt($pairs * 1))}, 1fr)`};
    gap: 1rem
  }
`

export const CardWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (width <= 1024px) {
    width: 7.5rem;
    height: 7.5rem;
  }

  @media (width <= 768px) {
    width: 5.5rem;
    height: 5.5rem;
  }
`

interface FlipperProps {
  $isFlipped: boolean;
}

export const Flipper = styled.div<FlipperProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--brand-color-purple);
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const Front = styled(Back)`
  background-color: var(--brand-color-paper);
  transform: rotateY(180deg);
`;

export const CardText = styled.span`
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--white);

  @media (width <= 1024px) {
    font-size: 3rem;
  }

  @media (width <= 768px) {
    font-size: 2.5rem;
  }
`
  
export const CardImage = styled.img`
  width: 6rem;

  @media (width <= 1024px) {
    width: 5rem;
  }

  @media (width <= 768px) {
    width: 4rem;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media (width <= 1024px) {
    padding: 0 3.2rem;
  }

  @media (width <= 768px) {
    padding: 0 2.4rem;
  }
`;