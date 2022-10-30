import React from 'react';
import styled from 'styled-components';

const IssueNumber = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IssueNumber;

const Wrapper = styled.div`
  display: inline-block;
  background-color: #e6b0b0;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  margin-right: 1rem;
`;
