import React from 'react';

import { Bebidas350, Bebidas600, Sucos, H20, Agua } from './content';

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
          <MenuTitle>Bebidas</MenuTitle>
        </Header>
        <h1>Bebidas 350ml</h1>
        <Menu>
          {Bebidas350.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt={bebida.name} />
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

        <h1>Bebidas 600ml</h1>
        <Menu>
          {Bebidas600.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt={bebida.name} />
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
        <h1>Sucos</h1>
        <Menu>
          {Sucos.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt={bebida.name} />
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
        <h1>H20</h1>
        <Menu>
          {H20.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt={bebida.name} />
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

        <h1>Água</h1>
        <Menu>
          {Agua.map((bebida) => {
            return (
              <MenuItem>
                <Imagem>
                  <img src={bebida.imagem} alt={bebida.name} />
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
