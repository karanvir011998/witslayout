import React from "react";
import {
  Maindiv,
  Meet,
  Our,
  We,
  Image,
  Julia,
  Left1,
  Left2,
  Left3,
  Left4,
  Right1,
  Right2,
  Right3,
  Animator,
  Employees,
  Designers,
  Founders,
  Developer,
} from "../styles/OurTeamStyle";

const OurTeam = () => {
  return (
    <>
      <Maindiv>
        <Meet>Meet the brains</Meet>
        <Our>Our Team</Our>
        <We>We're a team of thinkers, dreamers, and doers.</We>
        <Image src="./images/section7image.png" alt="Image" />
        <Julia src="./images/julia.png" alt="Image" />
        <Left1 src="./images/left1.png" alt="Image" />
        <Left2 src="./images/left2.png" alt="Image" />
        <Left3 src="./images/left3.png" alt="Image" />
        <Left4 src="./images/left4.png" alt="Image" />
        <Right1 src="./images/right1.png" alt="Image" />
        <Right2 src="./images/right2.png" alt="Image" />
        <Right3 src="./images/right3.png" alt="Image" />
        <Animator src="./images/animator.png" alt="Image" />
        <Employees src="./images/employees.png" alt="Image" />
        <Designers src="./images/ux.png" alt="Image" />
        <Founders src="./images/founders.png" alt="Image" />
        <Developer src="./images/developer.png" alt="Image" />
      </Maindiv>
    </>
  );
};

export default OurTeam;
