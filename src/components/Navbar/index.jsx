import React from "react";
import {
  Information,
  Links,
  Nav,
  NavContainer,
  NavLogo,
  Notification,
  PersonalInformation,
  SVG
} from "./style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Logo</NavLogo>
          <Information>
            <Notification to="/">
              <SVG.Notification />
              <div className="count">1</div>
            </Notification>

            <PersonalInformation>
              <Links to="/">
                Личный кабинет <SVG.Account />
              </Links>
            </PersonalInformation>
          </Information>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
