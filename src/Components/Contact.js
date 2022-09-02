import {
  ContactUs,
  FormMain,
  LeftSide,
  RightSide,
  FormWrapper,
  Attachment,
  Label,
  Input,
  Select,
  Option,
  Send,
  Or,
  Ready,
  Connect,
  Wrapper,
  Whatsapp,
  Calendly,
  Image,
  Imagetop,
  Bottomdiv,
  Bottomtext,
  Content,
  Head,
  Para,
  Text,
} from "../styles/ContactStyle";

function Contact() {
  return (
    <ContactUs>
      <Content>
        <Head>Got an idea?</Head>
        <Para>Contact Us</Para>
        <Text>You have questions. We have answers.</Text>
      </Content>
      <FormMain>
        <LeftSide>
          <Imagetop src="./images/top.png" />
          {/* <Image src="./images/corner.png" alt="" /> */}
          Have a Project? We would love to help
          <Image src="./images/bottom.png" />
        </LeftSide>
        <RightSide>
          <Label for="interests">I'm interested in...</Label>
          <FormWrapper>
            <Select name="interests" id="interests">
              <Option value="all">All services</Option>
              <Option value="all">UI Design</Option>
              <Option value="all">Website Design</Option>
            </Select>
            <Input type="text" name="" id="" placeholder="Your name" />
            <Input type="email" name="" id="" placeholder="Your email" />
            <Input type="text" placeholder="Tell us about your project  " />
            <Attachment>
              <i class="fa-solid fa-link"></i> <b>Add Attachment </b> (optional)
            </Attachment>

            <Send type="submit" value="Send Request" />
            <Bottomdiv>
              <Or>or</Or>
              <Bottomtext>
                <Ready>
                  If you're ready to make a change, we're ready to help.
                </Ready>
                <Connect>Just connect with us today!</Connect>
              </Bottomtext>

              <Wrapper>
                <Whatsapp>Whatsapp</Whatsapp>
                <Calendly>Calendly</Calendly>
              </Wrapper>
            </Bottomdiv>
          </FormWrapper>
        </RightSide>
      </FormMain>
    </ContactUs>
  );
}
export default Contact;
