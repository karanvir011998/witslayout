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
  // Comma,
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
} from "./TestimonialsStyle";

function Testimonials() {
  return (
    <Testimonial>
      <ImgLeft>
        <SideImg src="./images/sliderSideImg.png" alt="sideImg" />
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
            <LeftArrow src="./images/leftarrow.png" alt="left" />
            <RightArrow src="./images/rightarrow.png" alt="right" />
          </ArrowImg>
        </Div>
        <Profile>
          {/* <Cot src="./images/comas.png" alt="comas" /> */}
          <OuterDiv>
            <First>
              <Girl src="./images/profile.png" alt="profile" />
            </First>
            <Second>
              <Jane>
                <JaneName>Jane Cooper</JaneName>
                <JanePost>Manager at Google</JanePost>
                <ImgStar>
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Null src="./images/nullstar.png" alt="null" />
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
}

export default Testimonials;
