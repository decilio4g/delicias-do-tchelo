import React from 'react';

import { WatchLater as RecentSearchIcon } from '@styled-icons/material-outlined/WatchLater';

import {
  Container,
  Label,
  ListRecentSearch,
  ItemRecentSearch,
  ItemRecentSearchLabel,
} from './styles';

function RecentSearch() {
  const recentSearch = [
    'Pastel de queijo',
    'Pastel de pizza',
    'Fritas com bacon',
  ];

  return (
    <Container>
      <Label>Pesquisas recentes</Label>
      <ListRecentSearch>
        {recentSearch.map((item, i) => (
          <ItemRecentSearch key={i}>
            <RecentSearchIcon size={20} color="#888888" />
            <ItemRecentSearchLabel>{item}</ItemRecentSearchLabel>
          </ItemRecentSearch>
        ))}
      </ListRecentSearch>
    </Container>
  );
}

export default RecentSearch;
