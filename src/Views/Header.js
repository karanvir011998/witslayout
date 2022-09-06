import React from "react";
import {
  Div,
  Navbar,
  NavIcon,
  A,
  Img,
  List,
  Ul,
  Li,
  Btn,
  Button,
  About,
  Services,
  Listhover,
} from "../styles/HeaderStyle";

function Header() {
  return (
    <Div>
      <Navbar>
        <NavIcon>
          {/* <A href="https://thewitslab.com/"> */}
          <Img src="./images/wits-logo.png" alt="wits-logo" />
          {/* </A> */}
        </NavIcon>
        <List>
          <Ul>
            <A href="">
              <About>
                About Us<i className="fa-solid fa-angle-down"></i>
                <Listhover>About Us </Listhover>
                <Listhover>Tech we use</Listhover>
              </About>
            </A>
            <A href="/">
              <Li>Industry</Li>
            </A>
            <A href="/">
              <Services>
                Services<i className="fa-solid fa-angle-down"></i>
                <Listhover>About Us </Listhover>
                <Listhover>Tech we use</Listhover>
                <Listhover>About Us </Listhover>
                <Listhover>Tech we use</Listhover>
                <Listhover>About Us </Listhover>
                <Listhover>Tech we use</Listhover>
                <Listhover>Tech we use</Listhover>
              </Services>
            </A>
            <A href="">
              <Li>Career</Li>
            </A>
          </Ul>
        </List>
        <Btn>
          <Button>Let's Connect</Button>
        </Btn>
      </Navbar>
    </Div>
  );
}

export default Header;
