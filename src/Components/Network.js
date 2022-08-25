import {
  OurNetwork,
  Righthead,
  LeftNumbers,
  OurNum,
  RightNumbers,
  LeftImage,
  LeftImg,
} from "./NetworkStyle";

function Network() {
  return (
    <OurNetwork>
      <LeftImage>
        <LeftImg src="./images/networkdivimg.png" alt="networks" />
      </LeftImage>
      <LeftNumbers>
        <p>Let us tell a story of</p>
        <OurNum>Our Numbers</OurNum>
      </LeftNumbers>
      <RightNumbers>
        <Righthead>
          When you see our numbers, you'll know why we're the best.
        </Righthead>
        We're a fastest growing community working hard to make things happen.
        We've got a lot of hands-on cumulative experience and a good amount of
        fire under our tails, though we are young.
      </RightNumbers>
    </OurNetwork>
  );
}

export default Network;
