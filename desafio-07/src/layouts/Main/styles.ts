import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
`

export const GameDifficulties = styled.div`
  background-color: var(--dark);
  border-radius: 1rem;

  padding: 2.5rem 4.68rem;
  position: relative;
`

export const SpiderWeb = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;
`

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 400;
  color: var(--white);
  -webkit-text-stroke: 4px var(--brand-color-purple);

  margin-bottom: 3rem;
`