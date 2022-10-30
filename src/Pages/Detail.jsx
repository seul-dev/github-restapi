import React, { useEffect, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../Components/Basic/Card';
import { getIssue } from '../lib/context/IssueActions';
import IssueContext from '../lib/context/IssueContext';
import { parseMarkdown } from '../lib/util/remark';

const Detail = () => {
  const { issue, loading, dispatch } = useContext(IssueContext);
  const { issue_number } = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getItem = async () => {
      const issueItem = await getIssue(issue_number);
      dispatch({ type: 'GET_ISSUE', payload: issueItem });
    };
    getItem();
  }, [dispatch, issue_number]);

  const { title, number, user, created_at, comments, body } = issue;

  const renderedPost = useMemo(() => {
    return parseMarkdown(body);
  }, [body]);

  return (
    <Card>
      <h1>{title}</h1>
      <p>{`issue Number #${number}`}</p>
      <p>{created_at}</p>
      <p>{user.login}</p>
      <Img src={user.avatar_url} alt='user-avatar' />
      <p>{`${comments}comments`}</p>
      <Body dangerouslySetInnerHTML={{ __html: renderedPost }} />
    </Card>
  );
};

export default Detail;

const Body = styled.div`
  margin: 3rem auto;
  overflow-wrap: break-word;
`;

const Img = styled.img`
  width: 4rem;
`;
