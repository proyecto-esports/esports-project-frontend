import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SkewLoader from 'react-spinners/SkewLoader';

import { API } from '../services/API';
import theme from '../theme';
import BidModal from './BidModal';

const CardDataMarket = () => {
  const [players, setPlayers] = useState();
  const idStorage = localStorage.getItem('user');
  const id = JSON.parse(idStorage).competition._id;
  const getAllPlayers = async () => {
    API.get(`/competitions/${id}`).then((res) => {
      setPlayers(res.data.info.data.market);
    });
  };
  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      {players ? (
        players.map((player) => (
          <Card
            key={player._id}
            direction={{ sm: 'row' }}
            overflow="visible"
            variant="outline"
            bg={theme.dark.popUpBackground}
            w="90%"
            maxW="27rem"
            color={theme.dark.primary}
          >
            <Image
              objectFit="cover"
              w="100px"
              padding="1rem 0rem 0rem 0rem"
              src={player.image}
              alt={player.nickname}
            />

            <Stack w="100%" padding="2% 0%">
              <CardBody padding="2%">
                <Heading size="md">{player.nickname}</Heading>
              </CardBody>
              <CardFooter
                justify="center"
                padding="0px"
                display="flex"
                flex-wrap="wrap"
                gap="15px"
              >
                <Stack align="center">
                  <Text fontWeight="bold" fontSize="12px">
                    AC
                  </Text>
                  <CircularProgress
                    max={50}
                    value={player.stats.kills}
                    color={theme.dark.stas}
                  >
                    <CircularProgressLabel fontWeight="bold">
                      {player.stats.kills * 2} %{' '}
                    </CircularProgressLabel>
                  </CircularProgress>
                </Stack>
                <Stack align="center">
                  <Text fontWeight="bold" fontSize="12px">
                    ACS
                  </Text>
                  <CircularProgress
                    max={7000}
                    value={player.stats.dmg}
                    color={theme.dark.stas}
                  >
                    <CircularProgressLabel fontWeight="bold">
                      {player.stats.dmg}{' '}
                    </CircularProgressLabel>
                  </CircularProgress>
                </Stack>
              </CardFooter>
            </Stack>
            <Stack padding="10px" justifyContent="center">
              <BidModal player={player} />
            </Stack>
          </Card>
        ))
      ) : (
        <Box
          w="100%"
          h="100%"
          color={theme.dark.primary}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <SkewLoader size="3rem" color={theme.dark.stas} />
        </Box>
      )}
    </>
  );
};

export default CardDataMarket;
