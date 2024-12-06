import styled from "styled-components";
import BgHeader from "../../assets/images/image-1.png";

export const Header = styled.header`
  background-image: url(${BgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (width >= 768px) {
    height: 40rem;
  }

  @media (width >= 1024px) {
    height: 60rem;
  }
`

export const Logo = styled.img`
  width: 21.6rem;

  @media (width >= 768px) {
    width: 30rem;
  }

  @media (width >= 1024px) {
    width: 60rem;
  }
`