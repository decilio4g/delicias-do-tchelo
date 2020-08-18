import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { FilterAlt as FilterIcon } from '@styled-icons/boxicons-regular/FilterAlt';
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close';

import {
  Container,
  SearchContainerLink,
  SearchContainer,
  SearchLabel,
  SearchInput,
  CancelText,
} from './styles';

function Search({ isPageHome }) {
  const inputRef = useRef();

  const [search, setSearch] = useState('');

  function emptySearch() {
    setSearch('');
  }

  useEffect(() => {
    if (!isPageHome) {
      inputRef.current.focus();
    }
  });

  return (
    <Container>
      {isPageHome ? (
        <>
          <SearchContainerLink to="/search/">
            <SearchIcon size={25} color="#ef715a" />
            <SearchLabel>Buscar</SearchLabel>
          </SearchContainerLink>
          <FilterIcon size={25} color="#ef715a" />
        </>
      ) : (
        <>
          <SearchContainer>
            <SearchIcon size={25} color="#ef715a" />
            <SearchInput
              type="text"
              name="search"
              placeholder="Buscar"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              ref={inputRef}
            />
            {search && (
              <CloseIcon size={20} color="#ef715a" onClick={emptySearch} />
            )}
          </SearchContainer>
          <CancelText to="/">Cancelar</CancelText>
        </>
      )}
    </Container>
  );
}

Search.propTypes = {
  isPageHome: PropTypes.bool,
};

Search.defaultProps = {
  isPageHome: false,
};

export default Search;
