import {
  Solution,
  SolHeadWrapper,
  SolHead,
  SolProblem,
  Wehave,
  Solbox,
  Lookingfor,
  Solutionsdata,
  GradiantLine,
  Ques,
  SoldataWrapper,
  BodyData,
  Arrowdown,
  Data,
} from "styles/views/homepage/solutions";
import datas from "data.json";

const Solutions = () => {
  return (
    <Solution>
      <SolHeadWrapper>
        <SolHead>
          <Wehave> We have got</Wehave>
          <SolProblem>Solutions to Your Problems</SolProblem>
          <Solbox>
            <Lookingfor>What are you looking for?</Lookingfor>
            <GradiantLine></GradiantLine>
            <Ques>Question 1 of 2</Ques>
            <SoldataWrapper>
              <Solutionsdata>
                {datas.map((data) => {
                  return (
                    <BodyData>
                      <Data className="data">{data.body}</Data>
                      <Arrowdown>
                        <i className="fa-solid fa-angle-right"></i>
                      </Arrowdown>
                    </BodyData>
                  );
                })}
              </Solutionsdata>
            </SoldataWrapper>
          </Solbox>
        </SolHead>
      </SolHeadWrapper>
    </Solution>
  );
};

export default Solutions;