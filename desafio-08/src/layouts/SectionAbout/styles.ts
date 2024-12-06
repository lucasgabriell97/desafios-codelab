import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--gray);
  position: relative;

  padding: 6.4rem 2.4rem;
  
  @media (width >= 768px) {
    padding: 6.4rem 3.2rem;
  }

  @media (width >= 1024px) {
    padding: 6.4rem 3.2rem;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  @media (width >= 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 13.6rem;
    max-width: 1216px;
    margin: 0 auto;
  }
`

export const EnvironmentImage = styled.img`
  width: 100%;
  height: 40rem;
  object-fit: cover;
  border-radius: 0.6rem;
`

export const AboutWrapper = styled.div``

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--dark);

  margin-bottom: 3.2rem;
`

export const ColoredLetter = styled.span<{ color: string }>`
  color: ${({ color }) => color}
`

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;

  margin-bottom: 3.2rem;
`