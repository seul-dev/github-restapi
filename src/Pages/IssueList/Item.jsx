import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Basic/Card';

const Item = ({ issue }) => {
  const { title, number, user, created_at, comments } = issue;

  return (
    <Link to={`/${number}`}>
      <Card>
        <h3>{title}</h3>
        <p>{number}</p>
        <p>{created_at}</p>
        <p>{comments}</p>
        <p>{user.login}</p>
      </Card>
    </Link>
  );
};

export default Item;
