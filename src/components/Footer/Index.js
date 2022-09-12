import {
  Ftr,
  LeftWrapper,
  RightWrapper,
  LeftTop,
  Description,
  Logo,
  Image,
  LeftBottom,
  FirstDiv,
  MiddleDiv,
  LastDiv,
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
  RightTop,
  AddressP,
  RightBottom,
  Sub,
  Search,
  Input,
  Email,
  Btn,
  EndFtr,
  Copywright,
  Term,
  Privacy,
  Legal,
  Startftr,
  FooterContainer,
} from "styles/components/Footer/Index";
import logo from "assets/images/wits-footer-logo.png";
import linkedin from "assets/images/linkedin.svg";
import fb from "assets/images/fb.svg";
import twitter from "assets/images/twitter.svg";
import youtube from "assets/images/youtube.svg";
import email from "assets/images/email.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Ftr>
        <LeftWrapper>
          <LeftTop>
            <Logo>
              <Image src={logo} />
            </Logo>
            <Description>
              Wits Innovation Lab is where creativity and innovation flourish.
              We provide the tools you need to come up with innovative solutions
              for today's businesses, big or small.
            </Description>
          </LeftTop>
          <LeftBottom>
            <FirstDiv>
              <Aboutus>About Us</Aboutus>
              <Services>Services</Services>
              <Casestudy>Case Studies</Casestudy>
              <Ourprocess>Our Process</Ourprocess>
              <Industries>Industries</Industries>
            </FirstDiv>
            <MiddleDiv>
              <General>General</General>
              <Company>Company</Company>
              <Career>Career</Career>
              <Blog>Blog</Blog>
              <Contact>Conatct us</Contact>
            </MiddleDiv>
            <LastDiv>
              <ContactUs>Contact Us</ContactUs>
              <AdddressIndia>
                SCO 40-41 D, 3rd floor,
                <AddressP> City Heart, Kharar, Punjab-140301</AddressP>
              </AdddressIndia>
              <AddressUsa>
                Unit 37 Tileyard Road, N7 9AH <p> California, United States</p>
              </AddressUsa>
            </LastDiv>
          </LeftBottom>
        </LeftWrapper>
        <RightWrapper>
          <RightTop>
            <FollowUS>Follow US</FollowUS>
            <Icons>
              <IconsImg src={linkedin} />
              <IconsImg src={fb} />
              <IconsImg src={twitter} />
              <IconsImg src={youtube} />
            </Icons>
          </RightTop>

          <RightBottom>
            <Sub>Subscribe to Our Newsletter</Sub>
            <Search>
              <Email src={email} />
              <Input type="text" placeholder="Enter your Email" />
              <Btn value="Submit">Subscribe</Btn>
            </Search>
          </RightBottom>
        </RightWrapper>
      </Ftr>
      <EndFtr>
        <Startftr>
          <Term>Terms & Conditions</Term>
          <Privacy>Privacy Policy</Privacy>
          <Legal>Legal</Legal>
        </Startftr>
        <Copywright>
          Copyright © 2020. witsinnovationlab. All rights reserved.
        </Copywright>
      </EndFtr>
    </FooterContainer>
  );
};
export default Footer;
