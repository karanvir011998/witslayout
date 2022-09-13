import React from "react";
import {
  HeaderContainer,
  Logo,
  LogoImage,
  NavbarWrapper,
  Links,
  ConnectButtonWrapper,
  ConnectButton,
  AboutUs,
  Services,
} from "styles/components/Header";

import witslogo from "assets/images/wits-logo.png";

const Header = () => (
  <HeaderContainer>
    <Logo>
      <LogoImage src={witslogo} alt="wits-logo" />
    </Logo>
    <NavbarWrapper>
      <AboutUs>
        About Us<i className="fa-solid fa-angle-down"></i>
      </AboutUs>
      <Links>Industry</Links>
      <Services>
        Services<i className="fa-solid fa-angle-down"></i>
      </Services>
      <Links>Career</Links>
    </NavbarWrapper>
    <ConnectButtonWrapper>
      <ConnectButton>Let's Connect</ConnectButton>
    </ConnectButtonWrapper>
  </HeaderContainer>
);

export default Header;
