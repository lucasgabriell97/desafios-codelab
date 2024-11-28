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
`

export const CardWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
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
`
  
export const CardImage = styled.img`
  width: 6rem;
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
`;

export const ModalContent = styled.div`
  background-color: var(--dark);
  border-radius: 1rem;

  padding: 2.5rem 4.68rem;
  position: relative;

  h2 {
    font-size: 4.5rem;
    font-weight: 400;
    text-align: center;
    color: var(--white);
    -webkit-text-stroke: 4px var(--brand-color-purple);

    margin-bottom: 3rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: var(--white);
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--brand-color-purple);
    background-color: var(--brand-color-light-purple);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--brand-color-purple);
      color: var(--brand-color-paper);
    }
  }
`;