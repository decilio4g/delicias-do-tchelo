import React from 'react';

import {
  Container,
  CategoriesList,
  CategoryLinkItem,
  CategoryWrapperImg,
  CategoryLabel,
} from './styles';

function Categories() {
  return (
    <Container>
      <CategoriesList>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Pastel</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Milho</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Refrigerante</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Fritas</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Raspadinha</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Pastel</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Pastel</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Pastel</CategoryLabel>
        </CategoryLinkItem>
        <CategoryLinkItem>
          <CategoryWrapperImg>
            <h1 style={{ color: '#000' }}>img</h1>
          </CategoryWrapperImg>
          <CategoryLabel>Pastel</CategoryLabel>
        </CategoryLinkItem>
      </CategoriesList>
    </Container>
  );
}

export default Categories;
