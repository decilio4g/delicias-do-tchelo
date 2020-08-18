import React from 'react';

// import { Container } from './styles';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Location from '../components/Location';
import Menu from '../components/Menu';

import BatataNoCone from '../components/BatataNoCone';

function pages() {
  return (
    <>
      <Layout>
        <Title />
      </Layout>
      <Location />
      <Menu />
      <BatataNoCone />
    </>
  );
}

export default pages;
