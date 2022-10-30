import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../lib/styles/GlobalStyle';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
