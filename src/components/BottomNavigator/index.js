import React from 'react';

import links from './content';

import { Container, MenuList, MenuItemLink, MenuItemLabel } from './styles';

function BottomNavigator() {
  return (
    <Container>
      <MenuList>
        {links.map((item, i) => (
          <MenuItemLink
            to={item.url}
            title={item.label}
            key={i}
            activeClassName="active"
          >
            {item.iconName}
            <MenuItemLabel>{item.label}</MenuItemLabel>
          </MenuItemLink>
        ))}
      </MenuList>
    </Container>
  );
}

export default BottomNavigator;
