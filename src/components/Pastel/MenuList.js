import React from "react";

import { MenuItem, Imagem, Infos } from "./styles";

function MenuList({ Pasteis = [] }) {
  return (
    <>
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
    </>
  );
}

export default MenuList;
