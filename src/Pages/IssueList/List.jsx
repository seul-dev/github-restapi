import React, { useContext, useRef, useCallback, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import IssueContext from '../../lib/context/IssueContext';
import { getIssueList } from '../../lib/context/IssueActions';
import Item from './Item';

const List = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { issueList, dispatch, loading } = useContext(IssueContext);
  const getList = async (pageNumber) => {
    const issues = await getIssueList(pageNumber);
    dispatch({ type: 'GET_ISSUELIST', payload: issues });
  };

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    getList(pageNumber);
  }, [dispatch, pageNumber]);

  const loader = useRef();
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  return (
    <div>
      {issueList.map((issue) => (
        <Item key={issue.id} issue={issue} />
      ))}
      <div ref={loader} />
    </div>
  );
};

export default List;
