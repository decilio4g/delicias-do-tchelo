import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 3rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    max-width: 100vw;
  }
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  padding: 1rem 0;

  @media (min-width: 700px) {
    width: 85rem;
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 0;

  &.active {
    .iconColor {
      color: #ef715a;
    }

    span {
      color: #ef715a;
    }
  }
`;

export const MenuItemLabel = styled.span`
  color: #888888;
  font-size: 14px;
  margin-top: 10px;
  text-decoration: none;
`;
