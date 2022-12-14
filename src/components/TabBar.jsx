import { Box, Img, Tab, Tabs } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import marketSVG from '../public/marketSVG.svg';
import rankingSVG from '../public/rankingSVG.svg';
import teamSVG from '../public/team.svg';
import theme from './../theme';

const TabBar = () => {
  return (
    <Box
      w="100%"
      h="4rem"
      position="fixed"
      bottom="0"
      align="center"
      isfitted="true"
      borderTopRadius="1rem"
      bg={theme.dark.popUpBackground}
      color={theme.dark.primary}
    >
      <Tabs
        display="flex"
        flexDirection="row"
        defaultIndex={1}
        padding="0.5rem"
        justifyContent="space-around"
      >
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3rem"
          height="3rem"
          padding="0"
          bg={theme.dark.primary}
        >
          <NavLink to="/dashboard/lineup" color={theme.dark.primary}>
            <Img src={teamSVG} alt="lineup" />
          </NavLink>
        </Tab>
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3rem"
          height="3rem"
          padding="0"
          bg={theme.dark.primary}
        >
          <NavLink to="/dashboard/ranking" color={theme.dark.primary}>
            <Img src={rankingSVG} alt="ranking" />
          </NavLink>
        </Tab>
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3rem"
          height="3rem"
          padding="0"
          bg={theme.dark.primary}
        >
          <NavLink to="/dashboard/market" color={theme.dark.primary}>
            <Img src={marketSVG} alt="market" />
          </NavLink>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabBar;
