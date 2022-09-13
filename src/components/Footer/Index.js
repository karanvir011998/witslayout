import {
  FooterWrapper,
  LeftWrapper,
  RightWrapper,
  DescriptionWrapper,
  Description,
  LogoWrapper,
  LogoImage,
  LeftBottom,
  LeftBlock,
  CenterBlock,
  RightBlock,
  Aboutus,
  Services,
  Casestudy,
  Ourprocess,
  Industries,
  General,
  Company,
  Career,
  Blog,
  Contact,
  ContactUs,
  AdddressIndia,
  AddressUsa,
  FollowUS,
  Icons,
  IconsImg,
  FollowUsWrapper,
  Address,
  SubscribeWrapper,
  Sub,
  Search,
  Input,
  Email,
  Btn,
  TermsConditionWrapper,
  Copywright,
  Term,
  Privacy,
  Legal,
  TermsBlock,
  FooterContainer,
} from "styles/components/Footer/index";
import logo from "assets/images/wits-footer-logo.png";
import linkedin from "assets/images/linkedin.svg";
import fb from "assets/images/fb.svg";
import twitter from "assets/images/twitter.svg";
import youtube from "assets/images/youtube.svg";
import email from "assets/images/email.svg";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <LeftWrapper>
        <DescriptionWrapper>
          <LogoWrapper>
            <LogoImage src={logo} />
          </LogoWrapper>
          <Description>
            Wits Innovation Lab is where creativity and innovation flourish. We
            provide the tools you need to come up with innovative solutions for
            today's businesses, big or small.
          </Description>
        </DescriptionWrapper>
        <LeftBottom>
          <LeftBlock>
            <Aboutus>About Us</Aboutus>
            <Services>Services</Services>
            <Casestudy>Case Studies</Casestudy>
            <Ourprocess>Our Process</Ourprocess>
            <Industries>Industries</Industries>
          </LeftBlock>
          <CenterBlock>
            <General>General</General>
            <Company>Company</Company>
            <Career>Career</Career>
            <Blog>Blog</Blog>
            <Contact>Conatct us</Contact>
          </CenterBlock>
          <RightBlock>
            <ContactUs>Contact Us</ContactUs>
            <AdddressIndia>
              SCO 40-41 D, 3rd floor,
              <Address> City Heart, Kharar, Punjab-140301</Address>
            </AdddressIndia>
            <AddressUsa>
              Unit 37 Tileyard Road, N7 9AH{" "}
              <Address> California, United States</Address>
            </AddressUsa>
          </RightBlock>
        </LeftBottom>
      </LeftWrapper>
      <RightWrapper>
        <FollowUsWrapper>
          <FollowUS>Follow US</FollowUS>
          <Icons>
            <IconsImg src={linkedin} />
            <IconsImg src={fb} />
            <IconsImg src={twitter} />
            <IconsImg src={youtube} />
          </Icons>
        </FollowUsWrapper>

        <SubscribeWrapper>
          <Sub>Subscribe to Our Newsletter</Sub>
          <Search>
            <Email src={email} />
            <Input type="text" placeholder="Enter your Email" />
            <Btn value="Submit">Subscribe</Btn>
          </Search>
        </SubscribeWrapper>
      </RightWrapper>
    </FooterWrapper>
    <TermsConditionWrapper>
      <TermsBlock>
        <Term>Terms & Conditions</Term>
        <Privacy>Privacy Policy</Privacy>
        <Legal>Legal</Legal>
      </TermsBlock>
      <Copywright>
        Copyright © 2020. witsinnovationlab. All rights reserved.
      </Copywright>
    </TermsConditionWrapper>
  </FooterContainer>
);
export default Footer;
