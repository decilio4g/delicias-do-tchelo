import React from 'react';

import { DirectionsWalk as WalkIcon } from '@styled-icons/material-rounded/DirectionsWalk';

import {
  Container,
  WrapperWithdrawTexts,
  TimeToWithdraw,
  WithdrawPrice,
} from './styles';

function Withdraw() {
  return (
    <Container>
      <WalkIcon size={30} color="#bdbdbf" />
      <WrapperWithdrawTexts>
        <TimeToWithdraw>Retirar em 15-20 min</TimeToWithdraw>
        <WithdrawPrice>Retirada Grátis</WithdrawPrice>
      </WrapperWithdrawTexts>
    </Container>
  );
}

export default Withdraw;
