import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import SkewLoader from 'react-spinners/SkewLoader';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';

const SpinnerModalPoints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, login } = useAuth();

  const updatePoints = () => {
    const first = { money: 100000 };
    const secon = { money: 75000 };
    const thirb = { money: 50000 };
    const rest = { money: 20000 };
    let renewRank = {};
    let renewUser = {};
    API.put(`users/points/${user.competition._id}`).then(
      API.get(`/competitions/${user.competition._id.toString()}`).then((res) => {
        const { users } = res.data.info.data;
        console.log(users);
        users.sort((a, b) => {
          return b.points - a.points;
        });
        for (let i = 0; i < users.length; i++) {
          if (users[i] == users[0]) {
            console.log('Hola');
            API.patch(`/users/money/${users[0]._id}`, first);
          }
          if (users[i] == users[1]) {
            API.patch(`/users/money/${users[1]._id}`, secon);
          }
          if (users[i] == users[2]) {
            API.patch(`/users/money/${users[2]._id}`, thirb);
          }
          if (users[i] != users[0] && users[i] != users[1] && users[i] != users[2]) {
            console.log('adios');
            API.patch(`/users/money/${users[i]._id}`, rest);
          }
        }
        API.get(`/users/${user._id}`).then((res) => {
          console.log(res);
          renewUser = res.data.info.data;
        });
        renewRank = { competition: res.data.info.data };
      }),
    );
    setTimeout(() => {
      login({ user: { ...renewUser, renewRank } });
      onClose();
    }, 3500);
  };

  return (
    <>
      <Button
        bg={theme.dark.popUpBackground}
        onClick={() => {
          updatePoints();
          onOpen();
        }}
      >
        Update Points
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          w="100%"
          h="50%"
          bg={theme.dark.popUpBackground}
          color={theme.dark.primary}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            h="70%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <SkewLoader color={theme.dark.stas} size="110px" />
            <Text>One moment, the players are scoring</Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpinnerModalPoints;
