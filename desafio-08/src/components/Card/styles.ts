import styled from "styled-components"

export const CardContainer = styled.article`
  /* width: 100%; */
  height: 30rem;
  background-color: #fefbf4;
  border-radius: 1.6rem;
  border: 2px solid #fff5de;

  padding: 0 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`

export const PizzaImage = styled.img`
  width: 12rem;
  
  position: absolute;
  top: -5rem;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;

  margin: 9.2rem 0 1.6rem 0;
`
export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: center;

  margin-bottom: 1.6rem;
`
export const Price = styled.span`
  font-size: 3.2rem;
  font-weight: 600;
`