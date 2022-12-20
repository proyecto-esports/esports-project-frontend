import { Box, Img, Tab, Tabs, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import marketSVG from '../public/marketSVG.svg';
import rankingSVG from '../public/rankingSVG.svg';
import teamSVG from '../public/team.svg';
import theme from './../theme';

const TabBar = () => {
  let indexMark = 0;
  if (window.location.pathname == '/dashboard/market') {
    indexMark = 2;
  }
  if (window.location.pathname == '/dashboard/ranking') {
    indexMark = 1;
  }
  if (window.location.pathname == '/dashboard/lineup') {
    indexMark = 0;
  }
  return (
    <Box
      w="100%"
      h="4rem"
      position="fixed"
      bottom="0"
      align="center"
      isfitted="true"
      bg={theme.dark.popUpBackground}
      color={theme.dark.primary}
    >
      <Tabs
        display="flex"
        flexDirection="row"
        padding="0.2rem"
        justifyContent="space-around"
        defaultIndex={indexMark}
      >
        <Tab
          _selected={{
            shadow: '0px 0px 0.4rem',
          }}
          color="white"
          display="flex"
          flexWrap="wrap"
          borderRadius="50%"
          width="3rem"
          height="2.6rem"
          padding="0"
        >
          <NavLink to="/dashboard/lineup" color={theme.dark.primary}>
            <Img w="2.5rem" src={teamSVG} alt="lineup" />
          </NavLink>
          <Text fontSize="0.8rem">Line Up</Text>
        </Tab>
        <Tab
          _selected={{
            shadow: '0px 0px 0.4rem',
          }}
          color="white"
          display="flex"
          borderRadius="50%"
          flexWrap="wrap"
          width="3rem"
          height="2.8rem"
          padding="0"
        >
          <NavLink to="/dashboard/ranking" color={theme.dark.primary}>
            <Img w="2.5rem" src={rankingSVG} alt="ranking" />
          </NavLink>
          <Text fontSize="0.8rem">Ranking</Text>
        </Tab>
        <Tab
          _selected={{
            shadow: '0rem 0rem 0.4rem',
          }}
          border="none"
          color="white"
          display="flex"
          borderRadius="50%"
          flexWrap="wrap"
          width="3rem"
          height="2.6rem"
          padding="0"
        >
          <NavLink to="/dashboard/market" color={theme.dark.primary}>
            <Img w="2.5rem" src={marketSVG} alt="market" />
          </NavLink>
          <Text fontSize="0.8rem">Market</Text>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabBar;
