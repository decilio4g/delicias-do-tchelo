import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  padding: 0 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
`;

export const SearchContainerLink = styled(Link)`
  background-color: #f5f6f8;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  flex: 1;

  &:active {
    opacity: 0.5;
    transition: all 0.2s;
  }
`;

export const SearchContainer = styled.div`
  background-color: #f5f6f8;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:active {
    opacity: 0.5;
    transition: all 0.2s;
  }
`;

export const SearchLabel = styled.span`
  color: #bdbdbf;
  margin-left: 10px;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  color: #bdbdbf;
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

export const CancelText = styled(Link)`
  color: #242424;
  font-size: 14px;
`;
