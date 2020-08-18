import React from 'react';

import { ClipboardList as OrderIcon } from '@styled-icons/heroicons-outline/ClipboardList';

import {
  Container,
  WrapperIcon,
  WrapperNumber,
  Number,
  SeeOrder,
  Price,
} from './styles';

function Order() {
  return (
    <Container to="/order/">
      <WrapperIcon>
        <OrderIcon size={30} color="#fff" />
        <WrapperNumber>
          <Number>5</Number>
        </WrapperNumber>
      </WrapperIcon>
      <SeeOrder>Ver pedido</SeeOrder>
      <Price>R$ 41,70</Price>
    </Container>
  );
}

export default Order;
