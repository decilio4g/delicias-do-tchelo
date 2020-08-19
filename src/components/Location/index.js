import React from "react";

import { GoLocation } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { format } from "date-fns";

import { Container, InfosWork, Type, Adress, Open, Close } from "./styles";

const Location = () => {
  function getTime() {
    const day = new Date().getDay();

    if (day === 2 || day === 6 || day === 7) {
      if (new Date().getHours() >= 5 && new Date().getHours() <= 22) {
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
  getTime();
  console.log(new Date());
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
