import { ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

import logoutSVG from '../public/logoutSVG.svg';
import logo from '../public/symbol-logo.svg';
import userSVG from '../public/userSVG.svg';
import { useAuth } from './../hooks/AuthContext';
import theme from './../theme';
import thousandsSeparator from './../utils/thousandsSeparator';
import ChangePasswordModal from './ChangePasswordModal';
import LogoMoney from './LogoMoney';
import RulesModal from './RulesModal';

const NavBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const userId = JSON.parse(user);
  const { logout } = useAuth();

  return (
    <>
      <Flex
        backgroundColor={theme.dark.primary}
        px={8}
        h={16}
        w="100%"
        alignItems={'center'}
        justifyContent={'space-between'}
        position="fixed"
        top="0"
        zIndex="10"
      >
        <Button onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </Button>
        <Box>
          <Img src={logo} alt="logo" width="1.6rem" />
        </Box>

        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar padding="0.2rem" src={userSVG} marginRight="0.3rem" />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Flex gap="5rem" w="100%">
                <Box display="flex" justifyContent="space-between" w="100%">
                  <Text>Funds:</Text>

                  <Text>
                    {thousandsSeparator(userId.money, '.')} <LogoMoney color="black" />
                  </Text>
                </Box>
              </Flex>
            </MenuItem>
            <MenuItem>
              <NavLink to="/dashboard/current-bids">Current Bids</NavLink>
            </MenuItem>
            <MenuItem>
              <RulesModal />
            </MenuItem>
            <MenuItem>
              <ChangePasswordModal />
            </MenuItem>
            <MenuItem>
              <Flex gap="5rem" w="100%">
                <Box display="flex" justifyContent="space-between" w="100%">
                  <NavLink to="/" onClick={() => logout()}>
                    <Text>LogOut</Text>
                  </NavLink>
                  <NavLink to="/" onClick={() => logout()}>
                    <Img src={logoutSVG} alt="logout" width="1.5rem" />
                  </NavLink>
                </Box>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavBar;
