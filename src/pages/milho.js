import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Location from '../components/Location';
import Menu from '../components/Menu';

import Milho from '../components/Milho';

function pages() {
  return (
    <>
      <Layout>
        <Title />
      </Layout>
      <Location />
      <Menu />
      <Milho />
    </>
  );
}

export default pages;
