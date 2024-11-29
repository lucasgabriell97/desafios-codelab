import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;

  margin-bottom: 3.5rem;

  @media (width <= 1024px) {
    padding: 0 3.2rem;
  }

  @media (width <= 768px) {
    padding: 0 2.4rem;
  }
`