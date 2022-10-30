import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ chlideren }) => {
  return (
    <>
      <Header />
      <Wrapper>{chlideren}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
