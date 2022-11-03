import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Container, IconWrapper, SidebarItem, SidebarMenu } from "./style";

const Sidebar = () => {
  return (
    <>
      <Container>
        <SidebarMenu>
          {sidebar.map(({ title, path, hidden, Icon }, index) => {
            return (
              !hidden && (
                <SidebarItem key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active" : "noactive"
                    }
                    key={index}
                  >
                    <IconWrapper>{Icon}</IconWrapper>
                    {title}
                  </NavLink>
                </SidebarItem>
              )
            );
          })}
        </SidebarMenu>
      </Container>
    </>
  );
};

export default Sidebar;
