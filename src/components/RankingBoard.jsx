import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';

import { API } from '../services/API';
import theme from '../theme';

const RankingBoard = () => {
  const [users, setUsers] = useState([]);
  const currentUser = localStorage.getItem('user');

  const jsonUser = JSON.parse(currentUser);
  const id = jsonUser.competition;

  const getAllUsers = async () => {
    API.get(`/competitions/${id}`).then((res) => {
      return setUsers(res.data.info.data.users);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  users.sort((a, b) => {
    return b.points - a.points;
  });

  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    element.ranking = `${i + 1}º`;
  }

  return (
    <TableContainer
      m="2rem"
      borderTopRadius="0.5rem"
      borderRadius="0.5rem"
      border="2px"
      borderColor={theme.dark.accent2}
      backgroundColor={theme.dark.background}
    >
      <Table variant="simple" backgroundColor="#e0e5e4">
        <TableCaption>
          The matches are played every Saturday at around 17-19h UTM
        </TableCaption>
        <Thead backgroundColor={theme.dark.popUpBackground}>
          <Tr>
            <Th color={theme.dark.accent1}>Nº</Th>
            <Th color={theme.dark.accent1}>USERNAME</Th>
            <Th isNumeric color={theme.dark.accent1}>
              POINTS
            </Th>
          </Tr>
        </Thead>
        <Tbody borderBottom="hidden">
          {users.length ? (
            users.map((user) =>
              user._id === jsonUser._id ? (
                <Tr key={user._id} border="2px" borderColor={theme.dark.accent1}>
                  <Th
                    padding="0.4rem 0.4rem 0.2rem 1.5rem"
                    fontWeight="bolder"
                    fontSize="1.5rem"
                  >
                    {user.ranking}
                  </Th>
                  <Td
                    padding="0.4rem 0.4rem 0.2rem 1.5rem"
                    fontWeight="bolder"
                    fontSize="1.2rem"
                  >
                    {user.username}
                  </Td>
                  <Td isNumeric fontWeight="bolder" fontSize="1.2rem">
                    {user.points}
                  </Td>
                </Tr>
              ) : (
                <Tr key={user._id}>
                  <Th padding="0.4rem 0.4rem 0.2rem 1.5rem">{user.ranking}</Th>
                  <Td padding="0.4rem 0.4rem 0.2rem 1.5rem">{user.username}</Td>
                  <Td isNumeric>{user.points}</Td>
                </Tr>
              ),
            )
          ) : (
            <Tr border="2px" borderColor={theme.dark.accent1}>
              <Th
                padding="0.4rem 0.4rem 0.2rem 1.5rem"
                fontWeight="bolder"
                fontSize="1.5rem"
              >
                There are no users in this competition
              </Th>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RankingBoard;