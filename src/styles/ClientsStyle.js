import styled from "styled-components";

export const ClientWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-top: 2.2px solid rgba(29, 46, 136, 0.6);
  border-bottom: 2.2px solid rgba(29, 46, 136, 0.6);
  justify-content: center;
  box-sizing: border-box;
  margin: 0 0 12vw 0;
`;

export const Client = styled.div`
  margin: 10vw 0 0 5vw;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const ClientPeraHead = styled.p`
  text-align: center;
  color: #828282;
  font-weight: 400;
  font-size: clamp(0.8rem, 1.4vw, 1.5rem);
  line-height: 2.5vw;
`;

export const ClientHeading = styled.h1`
  font-size: clamp(2.5rem, 3.7vw, 4.1rem);
  height: clamp(2.1rem, 2.8vw, 5rem);
  text-align: center;
  width: fit-content;
  border-bottom: 1vw solid #f9c51c;
`;

export const BorderDiv = styled.div``;

export const Heading = styled.h3`
  text-align: center;
  margin: 1.5vw 0 1vw;
  line-height: 3vw;
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  color: #282828;
`;

export const Para = styled.p`
  text-align: center;
  font-size: clamp(0.6rem, 1.2vw, 1.8rem);
  font-weight: 500;
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: calc(100% - 20%);
`;

export const FirstImgeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: clamp(1rem, 7vw, 10rem);
  box-sizing: border-box;
`;

export const SecondImgeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: clamp(1rem, 7vw, 10rem);
  padding: 3vw 0;
`;

export const HerbalLife = styled.img`
  width: clamp(1rem, 13vw, 18rem);
`;

export const Trepp = styled.img`
  width: clamp(1rem, 8vw, 18rem);
`;

export const Farms = styled.img`
  width: clamp(1rem, 20vw, 18rem);
`;

export const Affinidi = styled.img`
  width: clamp(1rem, 10vw, 18rem);
`;

export const Bcg = styled.img`
  width: clamp(1rem, 7vw, 18rem);
`;
export const Earn = styled.img`
  width: clamp(1rem, 6vw, 18rem);
`;

export const Hermes = styled.img`
  width: clamp(1rem, 9vw, 18rem);
`;

export const Designwork = styled.img`
  width: clamp(1rem, 7vw, 18rem);
`;

export const Moonverse = styled.img`
  width: clamp(1rem, 5vw, 18rem);
`;

export const Payu = styled.img`
  width: clamp(1rem, 8vw, 18rem);
`;
