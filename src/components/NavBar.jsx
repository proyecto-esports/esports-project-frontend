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
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../context/jwtContext';
import logoutSVG from '../public/logoutSVG.svg';
import logo from '../public/symbol-logo.svg';
import userSVG from '../public/userSVG.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  return (
    <>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={8}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
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
              <NavLink to="/" onClick={() => logout()}>
                <Flex gap="5rem">
                  <Text>LogOut</Text>
                  <Img src={logoutSVG} alt="logout" width="1.5rem" />
                </Flex>
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavBar;
