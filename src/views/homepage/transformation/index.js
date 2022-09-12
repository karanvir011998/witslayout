import React from "react";
import {
  TransformationWrapper,
  TransformationContainer,
  Heading,
  Span,
  Heading2,
  MiddleBtn,
  BtnTellus,
  BtnRightArrow,
  FollowUS,
  Line,
  FollowUSWrapper,
  SocialMedia,
  ToprightImage,
} from "styles/views/homepage/transformation";

import rightimage from "assets/images/group.png";
const Transformation = () => {
  return (
    <TransformationContainer>
      <TransformationWrapper>
        <Heading>
          We're not just IT. We're a
          <Span> Business Transformation Company.</Span>
        </Heading>
        <Heading2>
          We are more than just a business. We're a community of like-minded
          individuals who share our love for connecting people with the best in
          their area.
        </Heading2>
        <MiddleBtn className="middlebtn">
          <BtnTellus className="tell">Tell Us About Your Project</BtnTellus>
          <BtnRightArrow className="second">
            <i className="fa-solid fa-angle-right"></i>
          </BtnRightArrow>
        </MiddleBtn>
        <FollowUSWrapper>
          <FollowUS>Follow US</FollowUS>
          <Line></Line>
          <SocialMedia>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </SocialMedia>
        </FollowUSWrapper>
      </TransformationWrapper>
      <ToprightImage src={rightimage} alt="toprightlogo"></ToprightImage>
    </TransformationContainer>
  );
};

export default Transformation;