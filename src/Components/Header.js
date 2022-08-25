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
} from "./HeaderStyle";

function Header() {
  return (
    <Div>
      <Navbar>
        <NavIcon>
          <A href="https://thewitslab.com/">
            <Img src="./images/wits-logo.png" alt="wits-logo" />
          </A>
        </NavIcon>
        <List>
          <Ul>
            <A href="https://thewitslab.com/about">
              <Li>
                About Us<i className="fa-solid fa-angle-down"></i>
              </Li>
            </A>
            <A href="/">
              <Li>Industry</Li>
            </A>
            <A href="/">
              <Li>
                Services<i className="fa-solid fa-angle-down"></i>
              </Li>
            </A>
            <A href="https://thewitslab.com/careers">
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
