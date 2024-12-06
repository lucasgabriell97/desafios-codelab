import styled from "styled-components";

export const Button = styled.button<{ label: string }>`
  width: 20.8rem;
  background-color: var(--brand-color);
  border: none;
  border-radius: 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  padding: 1.2rem 4rem;

  position: ${({label}) => 
    label === "Comprar agora"
      ? "absolute"
      : "initial"
  };
  bottom: -2rem;

  transition: all .3s;

  &:hover {
    transform: scale(1.1)
  }
`