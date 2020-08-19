import React from "react";

import { GoLocation } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { FiClock } from "react-icons/fi";

import { Container, InfosWork, Type, Adress, Open, Close } from "./styles";

const Location = () => {
  function getTime() {
    const day = new Date().getDay();
    if (day === 1 || day === 2 || day === 3 || day === 4) {
      return (
        <Close>
          <FiClock />
          Fechado
        </Close>
      );
    }

    if (day === 0 || day === 5 || day === 6) {
      if (new Date().getHours() >= 5 && new Date().getHours() <= 21) {
        return (
          <Open>
            <FiClock />
            Aberto
          </Open>
        );
      } else {
        return (
          <Close>
            <FiClock />
            Fechado
          </Close>
        );
      }
    }
  }

  return (
    <Container className="">
      <InfosWork>
        <Type>
          <GiKnifeFork />
          <span>Pastel, Milho, Batata no cone e Pipoca</span>
        </Type>
        <br />
        <Adress>
          <GoLocation />
          <span>Avenida dos Esportes, Valinhos - SP</span>
        </Adress>
      </InfosWork>
      {getTime()}
    </Container>
  );
};

export default Location;
