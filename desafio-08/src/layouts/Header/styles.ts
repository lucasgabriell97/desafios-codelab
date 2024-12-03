import styled from "styled-components";
import BackgroundImageHeader from "../../assets/images/image-1.png";

export const Header = styled.header`
  background-image: url(${BackgroundImageHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30.0rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 21.6rem;
`