import { Box, Image, Text } from '@chakra-ui/react';

import theme from '../theme';

export const Carusel0 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      justifyContent="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567013/utils/home_niur2j.png"
        alt="home"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        In order to play, you must create or join a Group with your fiends 👯‍♀️.
      </Text>
    </Box>
  );
};
export const Carusel1 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      alignItems="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567013/utils/lineup_mtzbze.png"
        alt="lineup"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        Once inside, you are assigned 5 players who will be your lineup 🤾🏼‍♂️.
      </Text>
    </Box>
  );
};
export const Carusel2 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      alignItems="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567013/utils/bench_p8pzps.png"
        alt="bench"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        When you win a bid, these players will go to your bench. Can change them for one
        of your lineup or sell them 💰.
      </Text>
    </Box>
  );
};
export const Carusel3 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      alignItems="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567009/utils/bid_gs4cqg.png"
        alt="market"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        In the market you can bid to expand your list of players 💼.
      </Text>
    </Box>
  );
};
export const Carusel4 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      alignItems="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567008/utils/ranking_hnffgt.png"
        alt="ranking"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        On this screen you can see your rivals and know who is first. You can also
        generate a code with which your friends can join 📈.
      </Text>
    </Box>
  );
};
export const Carusel5 = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      alignItems="center"
      gap="2rem"
      flexDirection="column"
      hover="carousel"
      transition="all 250ms ease-in-out"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671567008/utils/adminPanel_ioicfw.png"
        alt="admin"
        minWidth="12rem"
      />
      <Text color={theme.dark.primary}>
        If you are Admin, yo will find a button with different functions, Update Points
        the points that the players have made are distributed to the users. Renew Market,
        close the bids and distribute the players to the winners, it also updates the
        market with new players 🦹🏽‍♂️.
      </Text>
    </Box>
  );
};
