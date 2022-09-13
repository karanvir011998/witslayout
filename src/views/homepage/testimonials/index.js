import React from "react";

import {
  TestimonialContainer,
  LeftBlock,
  SideImg,
  RightBlock,
  HeadinigSuccess,
  HeadingTestimonial,
  Span,
  Content,
  ArrowsWrapper,
  LeftArrow,
  RightArrow,
  ContentWrapper,
  SliderWrapper,
  SliderSubWrapper,
  ProfileImageWrapper,
  ProfileImage,
  ProfileWrapper,
  Profile,
  ProfileName,
  ProfilePost,
  StarImagesWrapper,
  GoldenStar,
  WhiteStar,
  DescriptionWrapper,
  Description,
} from "styles/views/homepage/testimonial/TestimonialsStyle";

import sliderLeftImg from "assets/images/sliderSideImg.png";
import leftArrow from "assets/images/leftarrow.png";
import rightArrow from "assets/images/rightarrow.png";
import profile from "assets/images/profile.png";
import fullstar from "assets/images/fillstar.png";
import halfstar from "assets/images/nullstar.png";

const Testimonials = () => (
  <TestimonialContainer>
    <LeftBlock>
      <SideImg src={sliderLeftImg} alt="sideImg" />
    </LeftBlock>
    <RightBlock>
      <HeadinigSuccess>See our success in</HeadinigSuccess>
      <HeadingTestimonial>Testimonials</HeadingTestimonial>

      <Span>We Are The Best, And Our Customers Say It.</Span>
      <ContentWrapper>
        <Content>
          We've never been ones to brag, but we can't help but share some of the
          feedback we've gotten from our clients. Take a look at what they have
          to say about us:
        </Content>

        <ArrowsWrapper>
          <LeftArrow src={leftArrow} alt="left" />
          <RightArrow src={rightArrow} alt="right" />
        </ArrowsWrapper>
      </ContentWrapper>
      <SliderWrapper>
        <SliderSubWrapper>
          <ProfileImageWrapper>
            <ProfileImage src={profile} alt="profile" />
          </ProfileImageWrapper>
          <ProfileWrapper>
            <Profile>
              <ProfileName>Jane Cooper</ProfileName>
              <ProfilePost>Manager at Google</ProfilePost>
              <StarImagesWrapper>
                <GoldenStar src={fullstar} alt="fill" />
                <GoldenStar src={fullstar} alt="fill" />
                <GoldenStar src={fullstar} alt="fill" />
                <GoldenStar src={fullstar} alt="fill" />
                <WhiteStar src={halfstar} alt="null" />
              </StarImagesWrapper>
            </Profile>
          </ProfileWrapper>
        </SliderSubWrapper>
        <DescriptionWrapper>
          <Description>
            "Thanks guys, keep up the good work! I wish I would have thought of
            it first. It's incredible. I don't always clop, but when I do, it's
            because of Wits Innovation Lab."
          </Description>
        </DescriptionWrapper>
      </SliderWrapper>
    </RightBlock>
  </TestimonialContainer>
);

export default Testimonials;
