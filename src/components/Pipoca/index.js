import React from 'react';

import Bebidas from './content';

import {
  Container,
  MenuList,
  Menu,
  MenuTitle,
  MenuItem,
  Imagem,
  Infos,
  Header,
} from './styles';

function Pastel() {
  return (
    <Container>
      <MenuList>
        <Header>
          <MenuTitle>Pipoca</MenuTitle>
        </Header>
        <Menu>
          {Bebidas.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt="Um milhozão" />
                </Imagem>

                <Infos>
                  <h2>{bebida.name}</h2>
                  <p>{bebida.descrição}</p>
                  <strong>{bebida.preço}</strong>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>
      </MenuList>
    </Container>
  );
}

export default Pastel;
