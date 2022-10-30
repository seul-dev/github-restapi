import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: black;
  border-radius: 8px;
  padding: 2rem;
  margin: 0.8rem auto;
`;
