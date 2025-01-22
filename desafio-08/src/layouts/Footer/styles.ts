import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem 1.5rem;
  
  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--dark);
  }

  a {
    color: var(--brand-color);
  }

  a:hover {
    text-decoration: none;
  }

  @media (width >= 768px) {
    padding: 2rem 2rem;
    
     p {
      font-size: 1.4rem;
    }
  }

  @media (width >= 1024px) {
    p {
      font-size: 1.6rem;
    }
  }
`