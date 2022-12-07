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
const DatosBasicosCarta = ({ boton }) => {
  return (
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
        src="https://owcdn.net/img/630584a60c0e8.png"
        alt="Caffe Latte"
      />

      <Stack w="100%" padding="2% 0%">
        <CardBody padding="2%">
          <Heading size="md">c4Lypso</Heading>
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
            <CircularProgress max={50} value={38} color="#5E2877">
              <CircularProgressLabel fontWeight="bold">38% </CircularProgressLabel>
            </CircularProgress>
          </Stack>
          <Stack align="center">
            <Text fontWeight="bold" fontSize="12px">
              ACS
            </Text>
            <CircularProgress value={69} color="#5E2877">
              <CircularProgressLabel fontWeight="bold">3124 </CircularProgressLabel>
            </CircularProgress>
          </Stack>
        </CardFooter>
      </Stack>
      {boton}
    </Card>
  );
};

export default DatosBasicosCarta;
