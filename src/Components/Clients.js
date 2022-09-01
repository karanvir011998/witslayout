import React from "react";
import {
  Client,
  ClientPeraHead,
  ClientHeading,
  BorderDiv,
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
} from "./ClientsStyle";
function Clients() {
  return (
    <Client>
      <ClientPeraHead>See who's winning with us</ClientPeraHead>
      <ClientHeading>Our Clients</ClientHeading>
      {/* <BorderDiv></BorderDiv> */}
      <Heading>
        These powerhouses are already winning business with us.
        <Para>We love what we do, and we hope you'll let us help you too.</Para>
      </Heading>
      <ImgDiv>
        <FirstImgeDiv>
          <HerbalLife src="./images/clients1.png" alt="herbal" />
          <Trepp src="./images/clients2.png" alt="trepp" />
          <Farms src="./images/clients3.png" alt="farm" />
          <Affinidi src="./images/clients4.png" alt="affinit" />
          <Bcg src="./images/clients5.png" alt="bcg" />
        </FirstImgeDiv>
        <SecondImgeDiv SecondImgeDiv>
          <Earn src="./images/clients6.png" alt="earn" />
          <Hermes src="./images/clients7.png" alt="hermes" />
          <Designwork src="./images/clients8.png" alt="designwrk" />
          <Moonverse src="./images/clients9.png" alt="moon" />
          <Payu src="./images/clients10.png" alt="payu" />
        </SecondImgeDiv>
      </ImgDiv>
    </Client>
  );
}

export default Clients;
