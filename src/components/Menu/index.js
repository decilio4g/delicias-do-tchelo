import React from "react";

import { Container, MenuList, MenuItemLink, MenuItemLabel } from "./styles";

import links from "./content";

function Menu() {
  return (
    <Container>
      <MenuList>
        {links.map((menu, key) => {
          return (
            <MenuItemLink
              to={menu.url}
              title={menu.label}
              key={key}
              activeClassName="active"
            >
              {menu.iconName}
              <MenuItemLabel>{menu.label}</MenuItemLabel>
            </MenuItemLink>
          );
        })}
      </MenuList>
    </Container>
  );
}

export default Menu;
