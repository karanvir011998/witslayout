import React from "react";
import Img from "assets/images/networkdivimg.png";
import {
  OurNumbersContainer,
  LeftBlockWrapper,
  OurNumbersWrapper,
  RightBlockWrapper,
  LeftBlockImage,
  Letdiv,
  Numberdiv,
  ContentWrapper,
  BorderWrapper,
  TargetWrapper,
  ContentHeading,
  ContentDescription,
  CodeWrapper,
  CodeRightBorder,
  MembersWrapper,
  Fourthline,
  ProjectsWrapper,
  CodeAchievement,
  CodeDescription,
  TeamAchievement,
  TeamDescription,
  ProjectAchievement,
  ProjectDescription,
} from "styles/views/homepage/ourNumbers/Index";

const OurNumbers = () => (
  <OurNumbersContainer>
    <LeftBlockWrapper>
      <LeftBlockImage src={Img} alt="image" />
    </LeftBlockWrapper>
    <OurNumbersWrapper>
      <Letdiv>Let us tell a story of</Letdiv>
      <Numberdiv>Our Numbers</Numberdiv>
    </OurNumbersWrapper>
    <RightBlockWrapper>
      <ContentWrapper>
        <ContentHeading>
          When you see our numbers, you'll know why we're the best.
        </ContentHeading>
        <ContentDescription>
          We're a fastest growing community working hard to make things happen.
          We've got a lot of hands-on cumulative experience and a good amount of
          fire under our tails, though we are young.
        </ContentDescription>
      </ContentWrapper>
      <BorderWrapper></BorderWrapper>
      <TargetWrapper>
        <CodeWrapper>
          <CodeAchievement>500k+</CodeAchievement>
          <CodeDescription>Lines Of Code</CodeDescription>
        </CodeWrapper>
        <CodeRightBorder></CodeRightBorder>
        <MembersWrapper>
          <TeamAchievement>140+</TeamAchievement>
          <TeamDescription>Team Members</TeamDescription>
        </MembersWrapper>
        <Fourthline></Fourthline>
        <ProjectsWrapper>
          <ProjectAchievement>65+</ProjectAchievement>
          <ProjectDescription>Completed Projects</ProjectDescription>
        </ProjectsWrapper>
      </TargetWrapper>
    </RightBlockWrapper>
  </OurNumbersContainer>
);
export default OurNumbers;
