import React from 'react';

// import { Container } from './styles';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Location from '../components/Location';
import Menu from '../components/Menu';

import Pastel from '../components/Pastel';
function pages() {
  return (
    <>
      <Layout>
        <Title />
      </Layout>
      <Location />
      <Menu />
      <Pastel />
    </>
  );
}

export default pages;
