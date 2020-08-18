import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Location from '../components/Location';
import Menu from '../components/Menu';

import Pipoca from '../components/Pipoca';

function pages() {
  return (
    <>
      <Layout>
        <Title />
      </Layout>
      <Location />
      <Menu />
      <Pipoca />
    </>
  );
}

export default pages;
