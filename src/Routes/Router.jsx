import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../Pages/IssueList/List';
import Detail from '../Pages/Detail/Detail';
import Layout from './../Components/Layout/Layout';
const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<List />} />
        <Route path='/:issue_number' element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
