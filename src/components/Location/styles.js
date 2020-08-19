import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 0;

  @media (min-width: 700px) {
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    padding: 2rem 18rem 0;
  }
`;

export const InfosWork = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    font-size: 1.5rem;
    margin: 0 1rem 0 0;
    color: rgb(127, 143, 159);
  }

  span {
    font-size: 1.5rem;
    color: rgb(127, 143, 159);
    font-weight: 300;
    font-family: "Roboto", sans-serif;
  }
`;

export const Type = styled.div``;

export const Adress = styled.div`
  margin-top: 1.5rem;
`;

export const Open = styled.span`
  font-size: 1.6rem;
  display: flex;
  align-self: center;

  background-color: var(--open-color);
  padding: 0.8rem;
  color: #fff;
  border: 1px solid var(--open-color);
  border-radius: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const Close = styled.span`
  font-size: 1.6rem;
  display: flex;
  align-self: center;

  background-color: var(--close-color);
  padding: 0.8rem;
  color: #fff;
  border: 1px solid var(--close-color);
  border-radius: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;
