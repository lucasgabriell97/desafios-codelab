import styled from "styled-components";

export const HeartIconWrapper = styled.div`
  background-color: #ffd4c9;
  border-radius: 0.8rem;
  border: 2px solid #ff3536;

  padding: 0.9rem;

  position: absolute;
  top: -1.8rem;
  right: 3.7rem;

  @media (width >= 1024px) {
    right: 1.6rem;
  }
`

export const HeartIcon = styled.img`
  width: 1.5rem;
`