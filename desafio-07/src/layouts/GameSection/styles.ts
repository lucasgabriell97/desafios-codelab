import styled from "styled-components";

interface GameProps {
  pairs: number;
}

export const Game = styled.section<GameProps>`
  display: grid;
  grid-template-columns: ${({ pairs }) =>
    pairs === 9 
      ? `repeat(${Math.ceil(Math.sqrt(pairs * 3))}, 1fr)`
      : `repeat(${Math.ceil(Math.sqrt(pairs * 2))}, 1fr)`
    };
  gap: 2rem;
`

export const CardWrapper = styled.div`
  background-color: var(--brand-color-paper);
  width: 11rem;
  height: 11rem;
  border-radius: 12px;

  display: flex;
  justify-content: center;
`

export const CardImage = styled.img`
  width: 7.8125rem;
`
