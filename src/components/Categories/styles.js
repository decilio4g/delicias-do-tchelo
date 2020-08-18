import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div``;

export const CategoriesList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;

export const CategoryLinkItem = styled(Link)`
  margin: 5px 10px;
  display: flex;
  flex-direction: column;

  &:active {
    opacity: 0.5;
    transition: all 0.2s;
  }
`;

export const CategoryWrapperImg = styled.div`
  background-color: #f9f4f4;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryLabel = styled.div`
  color: #bdbdbf;
  text-align: center;
  margin-top: 10px;
`;
