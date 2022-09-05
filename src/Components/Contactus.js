import React from "react";
// import { Attachment } from "../styles/ContactStyle";
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
} from "../styles/Contactusstyle";

function Contactus() {
  return (
    <Contactuss>
      <LeftContact>
        <LeftContactImg src="../images/contact-bg.png" alt="contact-bg" />
      </LeftContact>
      <Got>Got an idea?</Got>
      <Contact>Contact Us</Contact>
      <Ques>You have questions. We have answers.</Ques>
      <LeftWrap>
        <Left>
          <CircleImg src="../images/mask.png" alt="mask" />
          <Circle src="../images/circle.png" alt="circle" />
          <Project>Have a Project? We would love to help</Project>
        </Left>
        <WrapRight>
          <Right>
            <Interested>I’m interested in....</Interested>
            <Select>
              <Option>All Services</Option>
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
              <Icon src="../images/icon.png" alt="icon" />
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
                <WhatsApp src="../images/whatsapp.png" alt="whatsapp" />
                <What>Whatsapp</What>
              </WhatSection>
              <CalSection>
                <Calendly src="../images/calendly.png" alt="calendly" />
                <Cal>Calendly</Cal>
              </CalSection>
            </WholeSection>
          </Right>
        </WrapRight>
      </LeftWrap>
    </Contactuss>
  );
}

export default Contactus;
