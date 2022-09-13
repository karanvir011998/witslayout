import styled from "styled-components";

export const TransformationContainer = styled.div``;
export const TransformationWrapper = styled.div`
  padding: 5vw 4.5vw 0 6.5vw;
`;

export const Imagewarpper = styled.div``;

export const RightBlockImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: clamp(25rem, 44vw, 50rem);
`;

export const ButtonRightArrow = styled.button`
  background-color: #f9c51c;
  border: none;
  padding: 12px 5px 12px 5px;
`;

export const TellUsButton = styled.button`
  background-color: #1d2e88;
  color: white;
  border: none;
  padding: 12px 5px 12px 5px;
`;
export const ButtonWrapper = styled.div`
  width: fit-content;
  &:hover {
    ${ButtonRightArrow} {
      display: none;
    }
    ${TellUsButton} {
      width: 12.6vw;
    }
  }
`;

export const HeadingWrapper = styled.h1`
  font-weight: 800;
  width: clamp(25rem, 32vw, 60rem);
  font-size: clamp(2.5rem, 3.8vw, 20rem);
`;

export const Span = styled.span`
  color: #f9c51c;
`;

export const BusinessHeading = styled.p`
  margin: 14px 0 55px 0;
  width: clamp(21.5rem, 35vw, 50rem);
  font-size: clamp(0.8rem, 1.3vw, 20rem);
  line-height: 1.7;
`;
export const FollowUsWrapper = styled.div`
  padding: 70px 0;
  display: flex;
  font-size: clamp(1.2rem, 1.3vw, 20rem);
`;
export const FollowUs = styled.div`
  margin-right: 0.4vw;
  font-weight: 300;
`;

export const LineBlock = styled.div`
  margin: auto 0;
  border-bottom: 1px solid black;
  width: 4.5vw;
  margin-right: 0.5vw;
`;
export const SocialMediaIconsWrapper = styled.div`
  i {
    margin: 0 0.5vw;
    width: 20px;
  }
`;
