import React from "react";
import {
  HeaderWrapper,
  Logo,
  LogoImage,
  NavbarWrapper,
  Links,
  ConnectButtonWrapper,
  ConnectButton,
  AboutUs,
  Services,
} from "styles/components/Header/Index";

import witslogo from "assets/images/wits-logo.png";

function Header() {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
}

export default Header;
