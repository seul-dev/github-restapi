import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Components/Basic/Card';
import IssueNumber from '../../Components/Issue/IssueNumber';
import IssueComments from '../../Components/Issue/IssueComments';
import { dateformat } from '../../lib/util/dateformat';

const Item = ({ issue }) => {
  const { title, number, user, created_at, comments } = issue;

  return (
    <Link to={`/${number}`}>
      <Card>
        <IssueTitle>
          <IssueNumber>{`#${number}`}</IssueNumber>
          <h3>{title}</h3>
        </IssueTitle>
        <IssueInform>
          <div>
            <p>{`작성자: ${user.login}`}</p>
            <p>{`작성일: ${dateformat(created_at)}`}</p>
          </div>
          <IssueComments>{`${comments} comments`}</IssueComments>
        </IssueInform>
      </Card>
    </Link>
  );
};

export default Item;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  h3 {
    display: inline-block;
  }
`;

const IssueInform = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: inline-block;
    padding: 0.3rem;
  }
`;
