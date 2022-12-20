import { Box, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SkewLoader from 'react-spinners/SkewLoader';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api.js';
import CardDataMarket from './../components/CardDataMarket';
import theme from './../theme';

const CurrentBids = () => {
  const { user } = useAuth();
  const [currentBids, setCurrentBids] = useState();

  useEffect(() => {
    API.get('/bids').then((res) => {
      const { data } = res.data.info;
      const bids = data.filter((bid) => bid.user.toString() === user._id.toString());
      if (bids.length > 0) {
        setCurrentBids(bids);
      }
    });
  }, []);
  console.log('BIDS', currentBids);
  return (
    <Box justifySelf="start" w="100%" h="100%" bg={theme.dark.background}>
      <Stack
        w="100%"
        h="100%"
        alignItems="center"
        display="flex"
        bg={theme.dark.background}
        gap="1rem"
        padding="1rem 0rem"
      >
        {currentBids ? (
          currentBids.map(({ player }) => {
            console.log('player', player);
            return <CardDataMarket key={player._id.toString()} player={player} />;
          })
        ) : (
          <Box
            w="100%"
            h="100%"
            color={theme.dark.primary}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="4rem"
          >
            <SkewLoader size="3rem" color={theme.dark.stas} />
            <Text>You have no current bids...</Text>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default CurrentBids;
