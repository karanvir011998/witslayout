import React from "react";
import {
  TransformationWrapper,
  TransformationContainer,
  HeadingWrapper,
  Span,
  BusinessHeading,
  ButtonWrapper,
  TellUsButton,
  ButtonRightArrow,
  FollowUs,
  LineBlock,
  FollowUsWrapper,
  SocialMediaIconsWrapper,
  RightBlockImage,
} from "styles/views/homepage/transformation";

import rightimage from "assets/images/group.png";
const Transformation = () => (
  <TransformationContainer>
    <TransformationWrapper>
      <HeadingWrapper>
        We're not just IT. We're a<Span> Business Transformation Company.</Span>
      </HeadingWrapper>
      <BusinessHeading>
        We are more than just a business. We're a community of like-minded
        individuals who share our love for connecting people with the best in
        their area.
      </BusinessHeading>
      <ButtonWrapper className="middlebtn">
        <TellUsButton className="tell">Tell Us About Your Project</TellUsButton>
        <ButtonRightArrow className="second">
          <i className="fa-solid fa-angle-right"></i>
        </ButtonRightArrow>
      </ButtonWrapper>
      <FollowUsWrapper>
        <FollowUs>Follow US</FollowUs>
        <LineBlock></LineBlock>
        <SocialMediaIconsWrapper>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </SocialMediaIconsWrapper>
      </FollowUsWrapper>
    </TransformationWrapper>
    <RightBlockImage src={rightimage} alt="toprightimage"></RightBlockImage>
  </TransformationContainer>
);

export default Transformation;
