import {
  ContactUs,
  FormMain,
  LeftSide,
  RightSide,
  FormWrapper,
} from "./ContactStyle";

function Contact() {
  return (
    <ContactUs>
      <FormMain>
        <LeftSide>Have a Project? We would love to help</LeftSide>
        <RightSide>
          <FormWrapper>
            <label for="interests">I'm interested in...</label>
            <select name="interests" id="interests">
              <option value="all">All services</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="email" name="" id="" placeholder="Your email" />
            <div>Add Attachment (optional)</div>

            <input type="submit" value="Send Request" />
            <div>or</div>
            <div>
              If you're ready to make a change, we're ready to help. Just
              connect with us today!
            </div>
          </FormWrapper>
        </RightSide>
      </FormMain>
    </ContactUs>
  );
}
export default Contact;
