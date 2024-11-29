import styled from "styled-components"

export const GameMessageCardContainer = styled.section`
  background-color: var(--dark);
  border-radius: 1rem;

  padding: 2.5rem 4.68rem;
  position: relative;

  @media (width <= 1024px) {
    padding: 2.5rem 3.5rem;
  }

  @media (width <= 768px) {
    padding: 2.5rem 2.5rem;
  }
  `

export const SpiderWeb = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;

  @media (width <= 768px) {
    width: 5rem;
    top: -20px;
    right: -20px;
  }
`

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 400;
  text-align: center;
  color: var(--white);
  -webkit-text-stroke: 4px var(--brand-color-purple);

  margin-bottom: 3rem;

  @media (width <= 1024px) {
    margin-bottom: 2.5rem;
  }

  @media (width <= 768px) {
    font-size: 3.7rem;
    -webkit-text-stroke: 3px var(--brand-color-purple);
    margin-bottom: 2rem;
  }
`

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  color: var(--white);
  max-width: 500px;

  margin-bottom: 3rem;

  @media (width <= 1024px) {
    margin-bottom: 2.5rem;
  }

  @media (width <= 768px) {
    font-size: 1.18rem;
    margin-bottom: 2rem;
  }
`
