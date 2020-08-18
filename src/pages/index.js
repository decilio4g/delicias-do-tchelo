import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Location from '../components/Location';

import Menu from '../components/Menu';

function HomePage() {
  return (
    <>
      <Layout>
        <Title />
      </Layout>
      <Location />
      <Menu />
    </>
  );
}

export default HomePage;
