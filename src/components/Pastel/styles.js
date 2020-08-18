import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 700px) {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul {
      width: 85rem;
    }

    div {
      .select {
        width: 85rem;
      }
    }
  }
`;
export const MenuList = styled.div`
  .select {
    width: 45rem;
    font-size: 1.3rem;
  }

  h1 {
    padding-top: 1rem;
    font-size: 2rem;
    background-color: rgb(248, 249, 250);
    height: 4rem;
    margin: 4rem 0;
    text-align: center;
    color: rgb(72, 84, 96);
    font-weight: 600;
    border-bottom: 1px solid rgb(232, 234, 237);
  }
`;

export const SelectInput = styled.div`
  display: flex;
  justify-content: center;

  margin: 5rem 0;
`;

export const MenuTitle = styled.h2`
  font-size: 4rem;
`;

export const Menu = styled.ul`
  margin-top: 3rem;
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 0 1rem;

  & + li {
    margin: 5rem 0;
  }
`;

export const Infos = styled.div`
  h2 {
    font-size: 2rem;
    color: rgb(48, 51, 60);
    font-weight: 700;
    line-height: 120%;
  }

  p {
    margin: 1rem 0;
    font-size: 1.4rem;
    color: var(--color-text);
    font-weight: 500;
  }

  strong {
    font-weight: 800;
    font-size: 1.7rem;
    margin-top: 2rem;
  }

  span {
    margin-left: 2rem;
    font-size: 1.7rem;
    font-weight: 700;
  }
`;

export const Imagem = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 10%;
    width: 15rem;
    height: 10rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  color: var(--color-title);

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: var(--color-text);
  }
`;