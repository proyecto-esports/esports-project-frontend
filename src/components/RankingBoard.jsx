import { Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import Table from './Table';

const RankingBoard = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  const headers = ['Nº', 'USERNAME', 'POINTS'];
  const [rows, setRows] = useState(null);

  useEffect(() => {
    API.get(`/competitions/${user.competition._id}`).then((res) => {
      setUsers(res.data.info.data.users);
    });

    users.sort((a, b) => {
      return b.points - a.points;
    });

    setRows(
      users.map((user, i) => {
        return [`${i + 1}º`, user.username, user.money];
      }),
    );
  }, []);

  if (rows)
    return (
      <Table headers={headers} rows={rows} caption="The top 3 players get rewards" />
    );

  return <Text>Loading...</Text>;
};

export default RankingBoard;
