import styled from "styled-components";

export const BG = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 4vh;
`;
export const Div = styled.div`
  i {
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    margin: 0 0.5vw;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 75%);
`;

export const A = styled.a`
  text-decoration: none;
  &:hover {
    border-bottom: 0.2vw solid red;
  }
`;

export const Img = styled.img`
  width: clamp(5rem, 10vw, 15rem);
`;
export const List = styled.div`
  width: calc(100% - 40%);
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5vw;
`;

export const About = styled.ul`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const Listhover = styled.li`
  display: none;
`;

export const Services = styled.ul`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const Li = styled.li`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;
export const Btn = styled.div`
  display: flex;
  width: calc(100% - 80%);
`;
export const Button = styled.button`
  background: #f9c51c;
  border: none;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  padding: 1.2vh 1.5vw;
  font-weight: 600;
  &:hover {
    border: 1px solid black;
  }
`;
