import {
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
import React from 'react';

import theme from '../theme';
const DatosCartaModal = ({ player }) => {
  return (
    <>
      <Card
        key={player._id}
        direction={{ sm: 'row' }}
        overflow="visible"
        variant="outline"
        bg={theme.dark.popUpBackground}
        w="90%"
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
                  {player.stats.kills * 2}{' '}
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
      </Card>
    </>
  );
};

export default DatosCartaModal;
