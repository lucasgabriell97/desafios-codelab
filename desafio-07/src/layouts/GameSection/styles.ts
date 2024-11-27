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
interface CardWrapperProps {
  $isFlipped: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  background-color: ${({ $isFlipped }) =>
    $isFlipped ? "var(--brand-color-paper)" : "var(--brand-color-purple)"
  };
  width: 9rem;
  height: 9rem;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  position: relative;

  /* transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
  transition: transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  @-webkit-keyframes flip-vertical-right {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(180deg);
              transform: rotateY(180deg);
    }
  }
  @keyframes flip-vertical-right {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(180deg);
              transform: rotateY(180deg);
    }
  } */
`

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
`;

/* Front Face */
export const CardFront = styled(CardFace)`
  background-color: var(--brand-color-purple);
`;

/* Back Face */
export const CardBack = styled(CardFace)`
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