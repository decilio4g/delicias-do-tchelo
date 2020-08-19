import React from "react";

import Milhos from "./content";

import {
  Container,
  MenuList,
  Menu,
  MenuTitle,
  MenuItem,
  Imagem,
  Infos,
  Header,
} from "./styles";

function Pastel() {
  return (
    <Container>
      <MenuList>
        <Header>
          <MenuTitle>Milho</MenuTitle>
        </Header>
        <Menu>
          {Milhos.map((milho) => {
            return (
              <MenuItem key={milho.name}>
                <Imagem>
                  <img src={milho.imagem} alt="Um milhozão" />
                </Imagem>

                <Infos>
                  <h2>{milho.name}</h2>
                  <p>{milho.descrição}</p>
                  <strong>{milho.preço}</strong>
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
