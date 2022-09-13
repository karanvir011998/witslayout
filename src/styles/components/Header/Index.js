import styled from "styled-components";

import Background from "assets/images/background.png";

export const BackGroundImage = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 4vh;
`;

export const HeaderContainer = styled.div`
  i {
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    margin: 0 0.5vw;
  }
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25%);
`;

export const LogoImage = styled.img`
  width: clamp(5rem, 10vw, 15rem);
`;
export const NavbarWrapper = styled.div`
  width: calc(60%);
  display: flex;
  justify-content: center;
  column-gap: 1.5vw;
`;

export const AboutUs = styled.ul`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const Listhover = styled.li`
  display: none;
`;
export const Services = styled.ul`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const Links = styled.li`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const ConnectButtonWrapper = styled.div`
  display: flex;
  width: calc(20%);
`;
export const ConnectButton = styled.button`
  background: #f9c51c;
  border: none;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  padding: 1.2vh 1.5vw;
  font-weight: 600;
`;
