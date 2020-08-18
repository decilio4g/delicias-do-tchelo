import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Button, TitleText } from './styles';

function Title() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Button>
        <TitleText>{title}</TitleText>
      </Button>
    </Container>
  );
}

export default Title;
