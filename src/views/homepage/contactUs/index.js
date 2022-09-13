import React from "react";
import {
  ContactUsContainer,
  RightBackgroundWrapper,
  RightBackgroundImage,
  Got,
  Contact,
  Ques,
  ContactWrapper,
  LeftWrapper,
  CircleImg,
  Circle,
  HeadingProject,
  FormWrapper,
  Interested,
  DropdownMenu,
  InputFields,
  AddAttachmentWrapper,
  AddAttachmentIcon,
  AddAttachment,
  Optional,
  SendButtonWrapper,
  SendButton,
  LineWrapper,
  LeftLineBlock,
  Or,
  RightLineBlock,
  Description,
  LinksWrapper,
  WhatsappWrapper,
  WhatsAppIcon,
  WhatsappLink,
  CalendlyWrapper,
  CalendlyIcon,
  CalendlyLink,
  Input,
  Option,
} from "styles/views/homepage/contactUs";

import background from "assets/images/contact-bg.png";
import mask from "assets/images/mask.png";
import circle from "assets/images/circle.png";
import icon from "assets/images/Icon.png";
import calendly from "assets/images/calendly.png";
import whatsapp from "assets/images/whatsapp.png";

const Contactus = () => (
  <ContactUsContainer>
    <RightBackgroundWrapper>
      <RightBackgroundImage src={background} alt="contact-bg" />
    </RightBackgroundWrapper>
    <Got>Got an idea?</Got>
    <Contact>Contact Us</Contact>
    <Ques>You have questions. We have answers.</Ques>
    <ContactWrapper>
      <LeftWrapper>
        <CircleImg src={mask} alt="mask" />
        <Circle src={circle} alt="circle" />
        <HeadingProject>Have a Project? We would love to help</HeadingProject>
      </LeftWrapper>
      <FormWrapper>
        <Interested>I’m interested in....</Interested>
        <DropdownMenu>
          <Option>All Services</Option>
          <Option>Contact</Option>
          <Option>About Us</Option>
        </DropdownMenu>
        <InputFields>
          <Input type="text" placeholder="Your name"></Input>
          <Input type="email" placeholder="Your email"></Input>
          <Input type="text" placeholder="Tell us about your project"></Input>
        </InputFields>
        <AddAttachmentWrapper>
          <AddAttachmentIcon src={icon} alt="icon" />
          <AddAttachment>Add Attachment</AddAttachment>
          <Optional>(Optional)</Optional>
        </AddAttachmentWrapper>
        <SendButtonWrapper>
          <SendButton>Send Request</SendButton>
        </SendButtonWrapper>
        <LineWrapper>
          <LeftLineBlock></LeftLineBlock>
          <Or>or</Or>
          <RightLineBlock></RightLineBlock>
        </LineWrapper>
        <Description>
          If you're ready to make a change, we're ready to help. Just connect
          with us today!
        </Description>
        <LinksWrapper>
          <WhatsappWrapper>
            <WhatsAppIcon src={whatsapp} alt="whatsapp" />
            <WhatsappLink href="//api.whatsapp.com/send?phone=918437333427&text=HELLO">
              Whatsapp
            </WhatsappLink>
          </WhatsappWrapper>
          <CalendlyWrapper>
            <CalendlyIcon src={calendly} alt="calendly" />
            <CalendlyLink href="https://calendly.com/">Calendly</CalendlyLink>
          </CalendlyWrapper>
        </LinksWrapper>
      </FormWrapper>
    </ContactWrapper>
  </ContactUsContainer>
);

export default Contactus;
