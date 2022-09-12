import React from "react";
import {
  Contactuss,
  LeftContact,
  LeftContactImg,
  Got,
  Contact,
  Ques,
  LeftWrap,
  Left,
  CircleImg,
  Circle,
  Project,
  WrapRight,
  Right,
  Interested,
  Select,
  Field,
  Add,
  Icon,
  AddAttachment,
  Optional,
  SendBtn,
  Send,
  LineSection,
  Line1,
  Or,
  Line2,
  Description,
  Desc,
  WholeSection,
  WhatSection,
  WhatsApp,
  What,
  CalSection,
  Calendly,
  Cal,
  Input,
  Option,
} from "styles/views/homepage/contactUs";

import background from "assets/images/contact-bg.png";
import mask from "assets/images/mask.png";
import circle from "assets/images/circle.png";
import icon from "assets/images/Icon.png";
import calendly from "assets/images/calendly.png";
import whatsapp from "assets/images/whatsapp.png";

const Contactus = () => {
  return (
    <Contactuss>
      <LeftContact>
        <LeftContactImg src={background} alt="contact-bg" />
      </LeftContact>
      <Got>Got an idea?</Got>
      <Contact>Contact Us</Contact>
      <Ques>You have questions. We have answers.</Ques>
      <LeftWrap>
        <Left>
          <CircleImg src={mask} alt="mask" />
          <Circle src={circle} alt="circle" />
          <Project>Have a Project? We would love to help</Project>
        </Left>
        <WrapRight>
          <Right>
            <Interested>I’m interested in....</Interested>
            <Select>
              <Option>All Services</Option>
              <Option>Contact</Option>
              <Option>About Us</Option>
            </Select>
            <Field>
              <Input type="text" placeholder="Your name"></Input>
              <Input type="email" placeholder="Your email"></Input>
              <Input
                type="text"
                placeholder="Tell us about your project"
              ></Input>
            </Field>
            <Add>
              <Icon src={icon} alt="icon" />
              <AddAttachment>Add Attachment</AddAttachment>
              <Optional>(Optional)</Optional>
            </Add>
            <SendBtn>
              <Send>Send Request</Send>
            </SendBtn>
            <LineSection>
              <Line1></Line1>
              <Or>or</Or>
              <Line2></Line2>
            </LineSection>
            <Description>
              <Desc>
                If you're ready to make a change, we're ready to help. Just
                connect with us today!
              </Desc>
            </Description>
            <WholeSection>
              <WhatSection>
                <WhatsApp src={whatsapp} alt="whatsapp" />
                <What href="//api.whatsapp.com/send?phone=918437333427&text=HELLO">
                  Whatsapp
                </What>
              </WhatSection>
              <CalSection>
                <Calendly src={calendly} alt="calendly" />
                <Cal href="https://calendly.com/">Calendly</Cal>
              </CalSection>
            </WholeSection>
          </Right>
        </WrapRight>
      </LeftWrap>
    </Contactuss>
  );
};

export default Contactus;
