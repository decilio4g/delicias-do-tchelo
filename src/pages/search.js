import React from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import Order from '../components/Order';
import RecentSearch from '../components/RecentSearch';

function SearchPage() {
  return (
    <Layout>
      <Search />
      <RecentSearch />
      <Order />
    </Layout>
  );
}

export default SearchPage;
