import React, { useState } from 'react';
import Select from 'react-select';
import { navigate } from '@reach/router';

import Pasteis from './content';

import {
  Container,
  MenuList,
  Menu,
  MenuTitle,
  MenuItem,
  Imagem,
  Infos,
  Header,
  SelectInput,
} from './styles';

const options = [
  { value: 'Carne', label: 'Carne' },
  { value: 'Frango', label: 'Frango' },
  { value: 'Calabresa', label: 'Calabresa' },
];

function Pastel() {
  function getPastel(pastel) {
    switch (pastel) {
      case 'Carne':
        setSelectedPastel(pastel);
        navigate('#carne');
        break;
      case 'Frango':
        setSelectedPastel(pastel);
        navigate('#frango');
        break;
      case 'Calabresa':
        setSelectedPastel(pastel);
        navigate('#calabresa');
        break;
    }
  }

  const [selectedPastel, setSelectedPastel] = useState('Carne');

  return (
    <Container>
      <MenuList>
        <Header>
          <MenuTitle>Pastéis</MenuTitle>
          <p>Favor pedir pelo número do pastel</p>
        </Header>
        <SelectInput>
          <Select
            className="select"
            placeholder="Escolha um tipo de pastel"
            defaultValue={selectedPastel}
            onChange={(e) => getPastel(e.label)}
            options={options}
          />
        </SelectInput>
        <Menu>
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>

        <a href="#" id="carne" />
        <h1>Pastéis de Carne</h1>
        <Menu>
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>

        <a href="#" id="frango" />
        <h1>Pastéis de Frango</h1>
        <Menu>
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>

        <a href="#" id="calabresa" />
        <h1>Pastéis de Calabresa</h1>
        <Menu>
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>

        <h1>Pastéis de Calabresa</h1>
        <Menu>
          <a href="#" id="calabresa" />
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
                </Infos>
              </MenuItem>
            );
          })}
        </Menu>
        <h1>Pastéis de Calabresa</h1>
        <Menu>
          <a href="#" id="calabresa" />
          {Pasteis.map((pastel) => {
            return (
              <MenuItem key={pastel.name}>
                <Imagem>
                  <img src={pastel.imagem} alt="Um pastelzão" />
                </Imagem>

                <Infos>
                  <h2>{pastel.name}</h2>
                  <p>{pastel.descrição}</p>
                  <strong>{pastel.preço}</strong>
                  <span>Número: {pastel.numero}</span>
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
