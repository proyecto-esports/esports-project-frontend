import { Box, Img, Link, Tab, Tabs } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import marketSVG from '../public/marketSVG.svg';
import rankingSVG from '../public/rankingSVG.svg';
import teamSVG from '../public/team.svg';
import theme from './../theme';

const TabBar = () => {
  return (
    <Box
      position="relative"
      align="center"
      isFitted="true"
      borderRadius="1rem"
      bg={theme.dark.accent2}
      color={theme.dark.primary}
    >
      <Tabs
        display="flex"
        flexDirection="row"
        gap="1.5rem"
        defaultIndex={1}
        padding="1rem"
        justifyContent="space-around"
      >
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3.5rem"
          height="3.5rem"
          padding="0"
        >
          <NavLink to="/" color={theme.dark.primary}>
            <Img src={marketSVG} alt="market" />
          </NavLink>
        </Tab>
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3.5rem"
          height="3.5rem"
          padding="0"
        >
          <Link to="/" color={theme.dark.primary}>
            <Img src={teamSVG} alt="lineup" />
          </Link>
        </Tab>
        <Tab
          _selected={{
            color: '#57f7E0',
            borderBottom: ' 1.5px solid #101221',
            bg: '#57f7E0',
          }}
          borderRadius="50%"
          width="3.5rem"
          height="3.5rem"
          padding="0"
        >
          <NavLink to="/ranking" color={theme.dark.primary}>
            <Img src={rankingSVG} alt="ranking" />
          </NavLink>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabBar;
