import React from 'react';

import Batata from '../../images/fries_potatochips_3200.ico';
import Pastel from '../../images/pastel.ico';
import Pipoca from '../../images/corn.ico';
import Bebida from '../../images/Drink.ico';
import { GiPopcorn } from 'react-icons/gi';

const links = [
  {
    label: 'Pastéis',
    url: '/pastel',
    iconName: <img style={{ width: 35 }} src={Pastel} alt="Pastéis" />,
  },
  {
    label: 'Milho',
    url: '/milho',
    iconName: <img style={{ width: 35 }} src={Pipoca} alt="Milho no prato" />,
  },
  {
    label: 'Batata no Cone',
    url: '/batata-no-cone',
    iconName: <img style={{ width: 35 }} src={Batata} alt="batata no cone" />,
  },
  {
    label: 'Bebidas',
    url: '/bebidas',
    iconName: <img style={{ width: 35 }} src={Bebida} alt="Bebidas" />,
  },
  {
    label: 'Pipoca',
    url: '/pipoca',
    iconName: <GiPopcorn className="iconColor" size={35} color="#000" />,
  },
];

export default links;
