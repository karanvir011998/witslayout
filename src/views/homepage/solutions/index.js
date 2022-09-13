import {
  SolutionContainer,
  SolutionWrapper,
  SolutionContent,
  HeadingSolution,
  HeadingWehave,
  Solbox,
  Lookingfor,
  Solutionsdata,
  GradiantLine,
  Question,
  SolutionDataWrapper,
  BodyData,
  RightArrow,
  Data,
} from "styles/views/homepage/solutions";
import datas from "data.json";

const Solutions = () => (
  <SolutionContainer>
    <SolutionWrapper>
      <SolutionContent>
        <HeadingWehave> We have got</HeadingWehave>
        <HeadingSolution>Solutions to Your Problems</HeadingSolution>
        <Solbox>
          <Lookingfor>What are you looking for?</Lookingfor>
          <GradiantLine></GradiantLine>
          <Question>Question 1 of 2</Question>
          <SolutionDataWrapper>
            <Solutionsdata>
              {datas.map((data) => {
                return (
                  <BodyData>
                    <Data className="data">{data.body}</Data>
                    <RightArrow>
                      <i className="fa-solid fa-angle-right"></i>
                    </RightArrow>
                  </BodyData>
                );
              })}
            </Solutionsdata>
          </SolutionDataWrapper>
        </Solbox>
      </SolutionContent>
    </SolutionWrapper>
  </SolutionContainer>
);

export default Solutions;
