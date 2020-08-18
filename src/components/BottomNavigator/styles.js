import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
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
