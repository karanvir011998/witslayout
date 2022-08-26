import {
  Solution,
  SolHeadWrapper,
  SolHead,
  SolProblem,
  Wehave,
  Solbox,
  Lookingfor,
} from "./SolutionsStyle";
function Solutions() {
  return (
    <Solution>
      {/* <Image src="./images/solutionimage.png" /> */}
      <SolHeadWrapper>
        <SolHead>
          <Wehave> We have got</Wehave>
          <SolProblem>Solutions to Your Problems</SolProblem>
          <Solbox>
            <Lookingfor>What are you looking for?</Lookingfor>
            <div></div>
            <div>Question 1 of 2</div>
            <div className="main">
              <div className="sub">1</div>
              <div className="sub">2</div>
              <div className="sub">3</div>
              <div className="sub">4</div>
              <div className="sub">5</div>
              <div className="sub">6</div>
            </div>
          </Solbox>
        </SolHead>
      </SolHeadWrapper>
    </Solution>
  );
  //   <Solution></Solution>;
}

export default Solutions;
