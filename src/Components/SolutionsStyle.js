import styled from "styled-components";

export const Solution = styled.div`
  margin: 5%;
  border: 1px solid red;
`;
// export const Image = styled.img``;

export const SolHeadWrapper = styled.div`
  margin: 2vw;
  .main {
    width: calc(100% -20%);
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .sub {
    background-color: white;
    width: fit-content;
  }
`;
export const SolHead = styled.div`
  /* width: fit-content; */
  border: 1px solid black;
`;
export const Wehave = styled.span`
  font-weight: 400;
`;
export const SolProblem = styled.h1`
  border-bottom: 10px solid #f9c51c;
  height: 35px;
  width: 435px;
`;
export const Solbox = styled.div`
  border: 1px solid green;
  background: #1d2e88;
  border-radius: 16px;
`;

export const Lookingfor = styled.div``;
