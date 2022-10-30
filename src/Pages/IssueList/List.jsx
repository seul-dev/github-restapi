import React, { useContext, useRef, useCallback, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import IssueContext from '../../lib/context/IssueContext';
import { getIssueList } from '../../lib/context/IssueActions';
import Item from './Item';
import AdBanner from '../../Components/Basic/AdBanner';

const List = () => {
  // const [pageNumber, setPageNumber] = useState(1);
  const { issueList, dispatch, loading } = useContext(IssueContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getList = async () => {
      const issues = await getIssueList(1);
      dispatch({ type: 'GET_ISSUELIST', payload: issues });
    };
    getList();
  }, [dispatch]);

  // const loader = useRef();
  // const handleObserver = useCallback((entries) => {
  //   const target = entries[0];
  //   if (target.isIntersecting) {
  //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //   }
  // }, []);

  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     rootMargin: '20px',
  //     threshold: 0,
  //   };
  //   const observer = new IntersectionObserver(handleObserver, option);
  //   if (loader.current) observer.observe(loader.current);
  // }, [handleObserver]);
  if (loading) return <div>loading...</div>;

  return (
    <div>
      {issueList.flatMap((issue, idx) =>
        idx === 4 ? (
          <AdBanner key='ad-img' />
        ) : (
          <Item key={issue.id} issue={issue} />
        )
      )}
      {/* <div ref={loader} /> */}
    </div>
  );
};

export default List;
