// src/components/UserCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const UserCard = ({ user }) => (
  <Card>
    <Avatar src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    <h3>{user.first_name} {user.last_name}</h3>
    <p>{user.email}</p>
  </Card>
);

export default UserCard;
