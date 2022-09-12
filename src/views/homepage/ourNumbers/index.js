import {
  OurNetwork,
  Righthead,
  LeftNumbers,
  OurNum,
  RightNumbers,
  LeftImage,
  LeftImg,
  OurnetText,
  Tellus,
  LeftNumup,
  RightheadDesc,
  Fivehundredkwrapper,
  Fivek,
  Lineofcode,
  WrapperStatus,
  Fivehundredkwrapper65,
  MainRightDiv,
} from "styles/views/homepage/ourNumbers/Index";
import leftimg from "assets/images/networkdivimg.png";

const OurNumbers = () => {
  return (
    <OurNetwork>
      <LeftImage>
        <LeftImg src={leftimg} alt="networks" />
      </LeftImage>
      <OurnetText>
        <LeftNumup>
          <LeftNumbers>
            <Tellus>Let us tell a story of</Tellus>
            <OurNum>Our Numbers</OurNum>
          </LeftNumbers>
        </LeftNumup>
        <MainRightDiv>
          <RightNumbers>
            <Righthead>
              When you see our numbers, you'll know why we're the best.
            </Righthead>
            <RightheadDesc>
              We're a fastest growing community working hard to make things
              happen. We've got a lot of hands-on cumulative experience and a
              good amount of fire under our tails, though we are young.
            </RightheadDesc>
          </RightNumbers>
          <WrapperStatus>
            <Fivehundredkwrapper>
              <Fivek>500k +</Fivek>
              <Lineofcode>Line of code</Lineofcode>
            </Fivehundredkwrapper>
            <Fivehundredkwrapper>
              <Fivek>140 +</Fivek>
              <Lineofcode>Team Members</Lineofcode>
            </Fivehundredkwrapper>
            <Fivehundredkwrapper65>
              <Fivek>65 +</Fivek>
              <Lineofcode>Completed Projects</Lineofcode>
            </Fivehundredkwrapper65>
          </WrapperStatus>
        </MainRightDiv>
      </OurnetText>
    </OurNetwork>
  );
};

export default OurNumbers;
