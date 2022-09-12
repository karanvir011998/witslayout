import React from "react";

import {
  Testimonial,
  ImgLeft,
  SideImg,
  Content,
  Parasuccess,
  Head,
  Span4,
  Para,
  ArrowImg,
  LeftArrow,
  RightArrow,
  Div,
  Profile,
  OuterDiv,
  First,
  Girl,
  Second,
  Jane,
  JaneName,
  JanePost,
  ImgStar,
  Star,
  Null,
  DesWrapper,
  Des,
} from "styles/views/homepage/testimonial/TestimonialsStyle";

import sliderLeftImg from "assets/images/sliderSideImg.png";
import leftArrow from "assets/images/leftarrow.png";

import rightArrow from "assets/images/rightarrow.png";
import profile from "assets/images/profile.png";
import fullstar from "assets/images/fillstar.png";
import halfstar from "assets/images/nullstar.png";

const Testimonials = () => {
  return (
    <Testimonial>
      <ImgLeft>
        <SideImg src={sliderLeftImg} alt="sideImg" />
      </ImgLeft>
      <Content>
        <Parasuccess>See our success in</Parasuccess>
        <Head>Testimonials</Head>

        <Span4>We Are The Best, And Our Customers Say It.</Span4>
        <Div>
          <Para>
            We've never been ones to brag, but we can't help but share some of
            the feedback we've gotten from our clients. Take a look at what they
            have to say about us:
          </Para>

          <ArrowImg>
            <LeftArrow src={leftArrow} alt="left" />
            <RightArrow src={rightArrow} alt="right" />
          </ArrowImg>
        </Div>
        <Profile>
          <OuterDiv>
            <First>
              <Girl src={profile} alt="profile" />
            </First>
            <Second>
              <Jane>
                <JaneName>Jane Cooper</JaneName>
                <JanePost>Manager at Google</JanePost>
                <ImgStar>
                  <Star src={fullstar} alt="fill" />
                  <Star src={fullstar} alt="fill" />
                  <Star src={fullstar} alt="fill" />
                  <Star src={fullstar} alt="fill" />
                  <Null src={halfstar} alt="null" />
                </ImgStar>
              </Jane>
            </Second>
          </OuterDiv>
          <DesWrapper>
            <Des>
              "Thanks guys, keep up the good work! I wish I would have thought
              of it first. It's incredible. I don't always clop, but when I do,
              it's because of Wits Innovation Lab."
            </Des>
          </DesWrapper>
        </Profile>
      </Content>
    </Testimonial>
  );
};

export default Testimonials;
