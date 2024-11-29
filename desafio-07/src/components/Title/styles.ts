import styled from "styled-components";

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: var(--white);
  -webkit-text-stroke: 4px var(--brand-color-purple);
  text-align: center;

  padding: 5rem 0;

  @media (width <= 1024px) {
    font-size: 5rem;
    padding: 4rem 0;
  }

  @media (width <= 768px) {
    font-size: 4rem;
    -webkit-text-stroke: 3px var(--brand-color-purple);
    padding: 3.5rem 2.4rem;
  }
`