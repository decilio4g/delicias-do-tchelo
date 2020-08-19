import React from "react";

import Batata from "./content";

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
          <MenuTitle>Batata no cone</MenuTitle>
        </Header>
        <Menu>
          {Batata.map((batata) => {
            return (
              <MenuItem key={batata.name}>
                <Imagem>
                  <img src={batata.imagem} alt="Um milhozão" />
                </Imagem>

                <Infos>
                  <h2>{batata.name}</h2>
                  <p>{batata.descrição}</p>
                  <strong>{batata.preço}</strong>
                  <span>Número: {batata.numero}</span>
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
