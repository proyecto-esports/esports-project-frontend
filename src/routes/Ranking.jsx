import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api.js';
import theme from '../theme';
import AdminPanel from './../components/AdminPanel';
import Table from './../components/Table';

const Ranking = () => {
  const { user } = useAuth();

  const headers = ['Nº', 'USERNAME', 'POINTS'];
  const [rows, setRows] = useState();

  useEffect(() => {
    API.get(`/competitions/${user.competition._id.toString()}`).then((res) => {
      const { users } = res.data.info.data;

      users.sort((a, b) => {
        return b.points - a.points;
      });

      setRows(
        users.map((user, i) => {
          return [`${i + 1}º`, user.username, user.money];
        }),
      );
    });
  }, []);

  return (
    <Box w="100%" h="100%" alignItems="center" bg={theme.dark.background}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.dark.background}
        w="100%"
        h="100%"
      >
        <AdminPanel />
        {rows && (
          <Table headers={headers} rows={rows} caption="The top 3 players get rewards" />
        )}
      </Box>
    </Box>
  );
};

export default Ranking;
