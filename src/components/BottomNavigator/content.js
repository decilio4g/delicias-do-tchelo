import React from 'react';

import { Home as HomeIcon } from '@styled-icons/boxicons-regular/Home';
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { ClipboardList as OrderIcon } from '@styled-icons/heroicons-outline/ClipboardList';

const links = [
  {
    label: 'Início',
    url: '/',
    iconName: <HomeIcon className="iconColor" size={30} color="#808080" />,
  },
  {
    label: 'Busca',
    url: '/search/',
    iconName: <SearchIcon className="iconColor" size={30} color="#808080" />,
  },
  {
    label: 'Pedido',
    url: '/order/',
    iconName: <OrderIcon className="iconColor" size={30} color="#808080" />,
  },
];

export default links;
