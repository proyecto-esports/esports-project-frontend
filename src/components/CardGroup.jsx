import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { API } from '../services/API';
import theme from '../theme';
import LogoMoney from './LogoMoney';

const CardGroup = ({ user }) => {
  const [groups, setGroups] = useState();

  useEffect(() => {
    API.get(`/competitions/${user.competition._id}`).then((res) => {
      setGroups(res.data.info.data.name);
    });
  }, [user]);

  if (user.competition) {
    return (
      <NavLink to="/dashboard/lineup">
        <Card bg={theme.dark.popUpBackground} w="100%">
          <CardBody
            display="flex"
            alignContent="space-between"
            gap="4rem"
            justifyContent="space-between"
          >
            <Text color={theme.dark.primary}>{groups}</Text>
            <Text color={theme.dark.primary}>
              {user.money} <LogoMoney color={theme.dark.primary} />
            </Text>
          </CardBody>
        </Card>
      </NavLink>
    );
  } else {
    return (
      <>
        <Card bg={theme.dark.popUpBackground} w="100%">
          <CardBody
            display="flex"
            alignContent="space-between"
            gap="4rem"
            justifyContent="space-between"
          >
            <Text color={theme.dark.primary}>No Groups</Text>;
          </CardBody>
        </Card>
      </>
    );
  }
};

export default CardGroup;
