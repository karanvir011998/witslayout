import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
`;

export const LeftBlock = styled.div`
  width: calc(25%);
  margin: 0.5vw 0 0 0;
`;

export const SideImg = styled.img`
  width: calc(90%);
`;

export const RightBlock = styled.div`
  width: calc(63%);
  margin: 0vh 0 0vh 0.4vw;
`;

export const HeadinigSuccess = styled.p`
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1.2vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeadingTestimonial = styled.h1`
  border-bottom: 0.8vw solid #f9c51c;
  height: 2.7vw;
  width: fit-content;
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: 3.4vw;
  margin: 0 0 1vw 0;
`;

export const Span = styled.span`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  width: calc(90%);
  font-weight: 700;
  font-size: 1.21vw;
`;

export const Content = styled.p`
  color: rgba(79, 79, 79, 1);
  text-transform: none;
  margin: 1.7vw 0 0;
  line-height: 1.6vw;
  font-size: 1.2vw;
  font-weight: 400;
  width: clamp(24rem, 50vw, 60rem);
  word-spacing: 0.1rem;
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 1.4vw;
`;

export const LeftArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
`;

export const RightArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
`;

export const SliderWrapper = styled.div`
  background: #f1f1f1;
  border: 2px solid rgba(29, 46, 136, 0.5);
  border-radius: 16px;
  width: calc(66%);
  height: calc(45%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5vw 0 0 0;
  position: relative;
`;

export const SliderSubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
`;

export const ProfileImageWrapper = styled.div`
  margin: 0 0 0 6vw;
`;

export const ProfileImage = styled.img`
  max-width: 10vw;
`;

export const ProfileWrapper = styled.div``;

export const Profile = styled.div``;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 1.6vw;
`;

export const ProfilePost = styled.p`
  color: #94a3b8;
  font-size: 1.06vw;
  margin: 0.8vh 0 0 0;
`;

export const StarImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.4vw 0 0 0;
`;

export const GoldenStar = styled.img`
  max-width: 2vw;
`;

export const WhiteStar = styled.img`
  max-width: 2vw;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1vw;
  margin: 1.5vw 0 0 0;
  width: clamp(0.5rem, 27.5vw, 60rem);
  font-weight: 500;
  line-height: 1.5vw;
`;
