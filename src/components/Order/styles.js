import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled(Link)`
  position: fixed;
  bottom: 65px;
  background-color: #ef715a;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperIcon = styled.div`
  display: flex;
  position: relative;
`;

export const WrapperNumber = styled.div`
  position: absolute;
  right: -2px;
  top: 0;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 10px;
`;

export const SeeOrder = styled.div`
  color: #fff;
  font-weight: bold;
`;

export const Price = styled.div`
  color: #fff;
  font-weight: bold;
`;
