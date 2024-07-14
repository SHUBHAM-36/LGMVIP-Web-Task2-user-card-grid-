// src/App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

const UserGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Loader = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar onGetUsers={getUsers} />
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <UserGrid>
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </UserGrid>
        )}
      </AppContainer>
    </>
  );
}

export default App;
