import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { API } from '../services/API';
import theme from '../theme';
import LogoMoney from './LogoMoney';

const CardGroup = () => {
  const user = localStorage.getItem('user');
  const userComp = JSON.parse(user).competition;
  const userMoney = JSON.parse(user).money;
  const [groups, setGroups] = useState();
  const getGroup = async () => {
    await API.get(`/competitions/${userComp}`).then((res) => {
      setGroups(res.data.info.data.name);
    });
  };
  useEffect(() => {
    getGroup();
  }, []);
  console.log(groups);
  return (
    <NavLink to="/ranking">
      <Card bg={theme.dark.popUpBackground} w="100%">
        <CardBody
          display="flex"
          alignContent="space-between"
          gap="4rem"
          justifyContent="space-between"
        >
          <Text color={theme.dark.primary}>{groups}</Text>
          <Text color={theme.dark.primary}>
            {userMoney} <LogoMoney color={theme.dark.primary} />
          </Text>
        </CardBody>
      </Card>
    </NavLink>
  );
};

export default CardGroup;
