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

const DatosCartaModal = ({ player }) => {
  return (
    <>
      <Card
        direction={{ sm: 'row' }}
        overflow="visible"
        variant="outline"
        bg="white"
        w="90%"
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
              <CircularProgress max={50} value={player.stats.kills} color="#5E2877">
                <CircularProgressLabel fontWeight="bold">
                  {player.stats.kills}%{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Stack>
            <Stack align="center">
              <Text fontWeight="bold" fontSize="12px">
                ACS
              </Text>
              <CircularProgress max={750} value={player.stats.dmg} color="#5E2877">
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
