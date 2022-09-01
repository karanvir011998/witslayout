import styled from "styled-components";

export const Solution = styled.div`
  margin: 5%;
  border: 1px solid red;
`;

export const Data = styled.div`
  padding: 3.5vw 2vw;
`;

export const SolHeadWrapper = styled.div`
  margin: 2vw;
  /* .main {
    width: calc(100% -20%);
    display: grid;
    grid-template-columns: auto auto auto;
  } */
  .sub {
    /* background-color: white;
    width: fit-content; */
  }
`;
export const SolHead = styled.div`
  /* width: fit-content; */
  border: 1px solid black;
  font-size: 20px;
`;
export const Wehave = styled.span`
  font-weight: 300;
`;
export const SolProblem = styled.h1`
  border-bottom: 1vw solid #f9c51c;
  height: 2.8vw;

  width: fit-content;
  font-size: 3.5vw;
`;
export const Solbox = styled.div`
  /* padding: 20px, 5px; */
  padding: 2vw;
  margin: 1.5vw 1.5vw 1.5vw 1vw;
  border: 1px solid green;
  background: #1d2e88;
  border-radius: 16px;
  min-height: fit-content;
`;

export const Lookingfor = styled.div`
  font-size: 3vw;
  color: white;
  font-weight: 600;
`;

export const Ques = styled.div`
  font-size: 1.5vw;
  color: white;
  text-align: end;
  margin: 15px 0;
`;

export const SoldataWrapper = styled.div``;

export const Solutionsdata = styled.div`
  padding: 3.5vw;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 3vw;
  font-size: 1.5vw;
  background-color: #ffffff;
  height: 30vw;
  /* width: 72vw; */
  border-radius: 10px;
  /* margin: auto; */
`;

export const BodyData = styled.div`
  .data {
  }
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  border-radius: 20px;
  /* padding: 1.5vw; */
  /* margin: auto; */
`;

export const Arrowdown = styled.div`
  background: #f9c51c;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;

  padding: 27.5% 5%;
`;
export const GradiantLine = styled.div`
  height: 5px;
  background: linear-gradient(to right, #f9c51c 50%, white 50%);
`;
