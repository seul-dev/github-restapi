import React from 'react';
import styled from 'styled-components';

const IssueComments = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IssueComments;

const Wrapper = styled.div`
  display: inline-block;
  color: gray;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
`;
