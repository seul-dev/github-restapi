import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to='/'>Angular / Angular-cli</StyledLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: black;
`;
