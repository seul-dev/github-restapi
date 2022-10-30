import React, { useEffect, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Components/Basic/Card';
import { getIssue } from '../../lib/context/IssueActions';
import IssueContext from '../../lib/context/IssueContext';
import { parseMarkdown } from '../../lib/util/remark';
import IssueNumber from '../../Components/Issue/IssueNumber';
import IssueComments from '../../Components/Issue/IssueComments';
import { dateformat } from '../../lib/util/dateformat';

const Detail = () => {
  const params = useParams();
  const issue_number = Number(params.issue_number);
  const { issue, loading, dispatch } = useContext(IssueContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getItem = async () => {
      const issueItem = await getIssue(issue_number);
      dispatch({ type: 'GET_ISSUE', payload: issueItem });
    };
    getItem();
  }, [dispatch, issue_number]);

  const renderedPost = useMemo(() => {
    return parseMarkdown(issue.body);
  }, [issue.body]);
  if (loading) return <div>loading...</div>;
  return (
    <Card>
      <h1>{issue.title}</h1>
      <IssueNumber>{`#${issue.number}`}</IssueNumber>
      <p>{dateformat(issue.created_at)}</p>
      {/* <p>{user.login}</p> */}
      {/* <Img src={issue.user.avatar_url} alt='user-avatar' /> */}
      <IssueComments>{`${issue.comments}comments`}</IssueComments>
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
