import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SkewLoader from 'react-spinners/SkewLoader';

import CardDataMarket from '../components/CardDataMarket';
import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api.js';
import theme from '../theme';

const Market = () => {
  const { user } = useAuth();
  const id = user.competition._id.toString();
  const [market, setMarket] = useState();
  console.log('MARKET', market);

  useEffect(() => {
    API.get(`/competitions/${id}`).then((res) => {
      const { market } = res.data.info.data;
      console.log('RES', res);
      setMarket(market);
    });
  }, []);

  return (
    <Box w="100%" h="100%" alignItems="center" bg={theme.dark.background}>
      <Stack
        w="100%"
        h="100%"
        alignItems="center"
        display="flex"
        bg={theme.dark.background}
        gap="1rem"
        padding="1rem 0rem"
      >
        {market ? (
          market.map((player) => (
            <CardDataMarket key={player._id.toString()} player={player} />
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
      </Stack>
    </Box>
  );
};

export default Market;
