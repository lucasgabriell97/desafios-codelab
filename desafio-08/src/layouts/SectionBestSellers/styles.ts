import styled from "styled-components";
import BgLaPizza from  "../../assets/images/bg.jpg"

export const Section = styled.section`
  background-image: url(${BgLaPizza});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 6.4rem 2.4rem;
  
  @media (width >= 768px) {
    padding: 6.4rem 3.2rem;
  }

  @media (width >= 1024px) {
    background-position: initial;
    padding: 14.4rem 3.2rem 14.4rem 3.2rem;
  }
`

export const Title = styled.section`
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;

  margin-bottom: 10rem;

  @media (width >= 768px) {
    font-size: 3.6rem;
  }

  @media (width >= 1024px) {
    font-size: 4rem;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10rem;

  @media (width >= 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12.4rem 3.2rem;
  }

  @media (width >= 1135px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0 3.9rem;
    max-width: 1237px;
    margin: 0 auto;
  }
`