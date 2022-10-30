import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../Pages/List';
import Detail from '../Pages/Detail';
import Layout from './../Components/Layout/Layout';
const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:issue_number" element={<Detail />} />
      </Routes>
    </Layout>
  );
};

export default Router;
