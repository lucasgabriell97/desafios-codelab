import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.125rem;
  background-color: var(--brand-color-purple);
  color: var(--white);
  border: 2px solid var(--brand-color-purple);
  border-radius: 6px;

  display: block;
  cursor: pointer;
  width: 19.5rem;
  padding: 0.75rem;
  margin: 0 auto;

  transition: all 0.3s;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid var(--brand-color-purple);
  }
`