import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";

import { Container, Main } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Main>{children}</Main>
      <img
        src="https://static.goomer.app/stores/25998/products/mobile_menu/templates/44361/logo_v1593120997.png"
        alt=""
      />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
