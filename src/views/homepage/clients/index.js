import React from "react";
import {
  Client,
  ClientPeraHead,
  ClientHeading,
  Heading,
  Para,
  FirstImgeDiv,
  HerbalLife,
  ImgDiv,
  SecondImgeDiv,
  Earn,
  Trepp,
  Farms,
  Affinidi,
  Bcg,
  Hermes,
  Designwork,
  Moonverse,
  Payu,
} from "styles/views/homepage/client";
import herbal from "assets/images/clients1.png";
import trepp from "assets/images/clients2.png";
import farms from "assets/images/clients3.png";
import affiniti from "assets/images/clients4.png";
import bcg from "assets/images/clients5.png";
import earns from "assets/images/clients6.png";
import hermes from "assets/images/clients7.png";
import designwork from "assets/images/clients8.png";
import moonverse from "assets/images/clients9.png";
import payu from "assets/images/clients10.png";

const Clients = () => {
  return (
    <Client>
      <ClientPeraHead>See who's winning with us</ClientPeraHead>
      <ClientHeading>Our Clients</ClientHeading>
      <Heading>
        These powerhouses are already winning business with us.
        <Para>We love what we do, and we hope you'll let us help you too.</Para>
      </Heading>
      <ImgDiv>
        <FirstImgeDiv>
          <HerbalLife src={herbal} alt="herbal" />
          <Trepp src={trepp} alt="trepp" />
          <Farms src={farms} alt="farm" />
          <Affinidi src={affiniti} alt="affinit" />
          <Bcg src={bcg} alt="bcg" />
        </FirstImgeDiv>
        <SecondImgeDiv SecondImgeDiv>
          <Earn src={earns} alt="earn" />
          <Hermes src={hermes} alt="hermes" />
          <Designwork src={designwork} alt="designwrk" />
          <Moonverse src={moonverse} alt="moon" />
          <Payu src={payu} alt="payu" />
        </SecondImgeDiv>
      </ImgDiv>
    </Client>
  );
};

export default Clients;
