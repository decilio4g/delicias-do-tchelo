import React from 'react';

import { GoLocation } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { FiClock } from 'react-icons/fi';
import { Container, InfosWork, Type, Adress, OpenOrClose } from './styles';

const Location = () => {
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
      <OpenOrClose>
        <FiClock />
        Aberto
      </OpenOrClose>
    </Container>
  );
};

export default Location;
