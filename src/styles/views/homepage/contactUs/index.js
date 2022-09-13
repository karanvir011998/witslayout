import styled from "styled-components";

export const ContactUsContainer = styled.div`
  margin: 12vw 9.5vw 0 9.5vw;
`;

export const RightBackgroundWrapper = styled.div`
  position: absolute;
  width: calc(36.8%);
  right: 0;
  margin: 10.5vw 0 0 0;
`;

export const RightBackgroundImage = styled.img`
  width: calc(100%);
`;

export const Got = styled.p`
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1.2vw;
`;

export const Contact = styled.h1`
  border-bottom: 0.8vw solid #f9c51c;
  height: 2.65vw;
  width: fit-content;
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: 3.4vw;
  margin: 0.8vw 0 1vw 0;
`;

export const Ques = styled.p`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.22vw, 50rem);
  width: calc(64.5%);
  font-weight: 700;
  margin: 2.5vw 0 0 0;
`;

export const ContactWrapper = styled.div`
  border: 1.5px solid rgba(29, 46, 136, 1);
  border-radius: 1.25vw;
  display: flex;
  margin: 6vw 0 0 0;
  height: 49.2vw;
`;

export const LeftWrapper = styled.div`
  background-color: rgba(29, 46, 136, 1);
  width: calc(42.8%);

  border-radius: 1.25vw 0 0 1.25vw;
  position: relative;
`;

export const CircleImg = styled.img`
  width: calc(100%);
  height: calc(100%);
`;

export const Circle = styled.img`
  position: absolute;
  top: 1.5vw;
  left: 2vw;
  width: calc(100% - 22vw);
  height: calc(100% - 36.6vw);
`;

export const HeadingProject = styled.p`
  position: absolute;
  top: 16.8vw;
  left: 2.5vw;
  font-weight: 600;
  font-size: clamp(0.6rem, 3.6vw, 20rem);
  width: calc(80%);
  color: white;
`;

export const FormWrapper = styled.div`
  width: calc(57.2%);
  background-color: #ffffff;
  border-radius: 0 1.25vw 1.25vw 0;
  padding: 2vw 3.5vw 2vw 6vw;
  z-index: 3;
`;

export const Interested = styled.p`
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
`;

export const DropdownMenu = styled.select`
  background: #ffffff;
  border: 1px solid #000000;
  width: 33.88vw;
  height: 3.05vw;
  padding: 0 0 0 0.8vw;
  margin: 1vw 0 0 0;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  color: #4f4f4f;
  cursor: pointer;
  width: calc(95%);
`;

export const Option = styled.option``;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5vw;
  margin: 3.5vw 0 0 0;
`;

export const Input = styled.input`
  color: #828282;
  font-weight: 400;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  border: none;
  border-bottom: 1px solid #000000;
  background: #ffffff;
  width: calc(95%);
`;

export const AddAttachmentWrapper = styled.div`
  display: flex;
`;

export const AddAttachmentIcon = styled.img`
  margin: 2vw 0 0 0;
  width: clamp(0.6rem, 1.6vw, 5rem);
`;
export const AddAttachment = styled.span`
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  margin: 2.2vw 0 0 1.2vw;
  cursor: pointer;
`;

export const Optional = styled.p`
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  margin: 2.2vw 0 0 1vw;
`;
export const SendButtonWrapper = styled.div`
  margin: 3vw 0 0 0;
`;

export const SendButton = styled.button`
  background: #f9c51c;
  border: none;
  font-size: clamp(0.4rem, 1.2vw, 5rem);
  font-weight: 600;
  padding: 1vw 10vw 1vw 10vw;
  cursor: pointer;
  width: calc(95%);
  &:hover {
    border: 0.1vw solid black;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2vw 0 0 0;
  width: calc(95%);
`;

export const LeftLineBlock = styled.div`
  border-bottom: 0.1vw solid #333333;
  width: calc(45%);
`;

export const Or = styled.p`
  color: #333333;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.25vw, 5rem);
`;

export const RightLineBlock = styled.div`
  border-bottom: 0.1vw solid #333333;
  width: calc(45%);
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 2vw 0 0 0;
  color: #333333;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  width: calc(70%);
  margin: 1.3vw auto;
`;

export const LinksWrapper = styled.div`
  margin: 2vw 0 0 0;
  display: flex;
  width: calc(95%);
  gap: 1.5vw;
`;

export const WhatsappWrapper = styled.div`
  border: 0.1vw solid #000000;
  display: flex;
  width: calc(57%);
  align-items: center;
  justify-content: center;
  padding: 0.89vw 4.39vw 0.89vw 4.39vw;
`;

export const WhatsAppIcon = styled.img`
  width: clamp(0.8rem, 1.9vw, 10rem);
`;

export const WhatsappLink = styled.a`
  text-decoration: none;

  font-size: clamp(0.4rem, 1.22vw, 5rem);
  font-weight: 600;
  margin: 0 0 0 0.8vw;
  color: black;
`;

export const CalendlyWrapper = styled.div`
  border: 0.1vw solid #000000;
  display: flex;
  width: calc(57%);
  align-items: center;
  justify-content: center;
  padding: 0.89vw 4.39vw 0.89vw 4.39vw;
`;

export const CalendlyIcon = styled.img`
  width: clamp(0.8rem, 1.9vw, 10rem);
`;

export const CalendlyLink = styled.a`
  /* text-decoration: none; */
  font-size: clamp(0.4rem, 1.22vw, 5rem);
  font-weight: 600;
  margin: 0 0 0 0.8vw;
  color: black;
`;
