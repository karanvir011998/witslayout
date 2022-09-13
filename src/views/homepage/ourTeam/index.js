import React from "react";
import {
  OurTeamContainer,
  HeadingMeet,
  HeadingOur,
  HeadingWe,
  BackgroundImage,
  CenterImage,
  TopLeftCenterImage,
  TopLeftImage,
  LeftImage,
  BottomleftImage,
  TopRightImage,
  RightImage,
  BottomRightImage,
  AnimatorImage,
  EmployeesImage,
  DesignersImage,
  FoundersImage,
  DeveloperImage,
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

const OurTeam = () => (
  <OurTeamContainer>
    <HeadingMeet>Meet the brains</HeadingMeet>
    <HeadingOur>Our Team</HeadingOur>
    <HeadingWe>We're a team of thinkers, dreamers, and doers.</HeadingWe>
    <BackgroundImage src={section} alt="Image" />
    <CenterImage src={julia} alt="Image" />
    <TopLeftCenterImage src={left1} alt="Image" />
    <TopLeftImage src={left2} alt="Image" />
    <LeftImage src={left3} alt="Image" />
    <BottomleftImage src={left4} alt="Image" />
    <TopRightImage src={right1} alt="Image" />
    <RightImage src={right2} alt="Image" />
    <BottomRightImage src={right3} alt="Image" />
    <AnimatorImage src={animator} alt="Image" />
    <EmployeesImage src={employees} alt="Image" />
    <DesignersImage src={designers} alt="Image" />
    <FoundersImage src={founders} alt="Image" />
    <DeveloperImage src={developer} alt="Image" />
  </OurTeamContainer>
);

export default OurTeam;
