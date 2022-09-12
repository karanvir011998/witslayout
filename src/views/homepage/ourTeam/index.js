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
} from "styles/views/homepage/ourTeam/Index";
import section from "assets/images/section7image.png";
import left1 from "assets/images/left1.png";
import julia from "assets/images/julia.png";
import left2 from "assets/images/left2.png";
import left3 from "assets/images/left3.png";
import left4 from "assets/images/left4.png";
import right1 from "assets/images/right1.png";
import right2 from "assets/images/right2.png";
import right3 from "assets/images/right3.png";
import animator from "assets/images/animator.png";
import employees from "assets/images/employees.png";
import founders from "assets/images/founders.png";
import developer from "assets/images/developer.png";
import designers from "assets/images/ux.png";

const OurTeam = () => {
  return (
    <>
      <Maindiv>
        <Meet>Meet the brains</Meet>
        <Our>Our Team</Our>
        <We>We're a team of thinkers, dreamers, and doers.</We>
        <Image src={section} alt="Image" />
        <Julia src={julia} alt="Image" />
        <Left1 src={left1} alt="Image" />
        <Left2 src={left2} alt="Image" />
        <Left3 src={left3} alt="Image" />
        <Left4 src={left4} alt="Image" />
        <Right1 src={right1} alt="Image" />
        <Right2 src={right2} alt="Image" />
        <Right3 src={right3} alt="Image" />
        <Animator src={animator} alt="Image" />
        <Employees src={employees} alt="Image" />
        <Designers src={designers} alt="Image" />
        <Founders src={founders} alt="Image" />
        <Developer src={developer} alt="Image" />
      </Maindiv>
    </>
  );
};

export default OurTeam;
