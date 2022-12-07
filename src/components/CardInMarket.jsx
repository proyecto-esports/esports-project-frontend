import { Stack } from '@chakra-ui/react';
import React from 'react';

import BidModal from './BidModal';
import DatosBasicosCarta from './DatosBasicosCarta';

const CartaMercado = () => {
  return (
    <DatosBasicosCarta
      boton={
        <Stack padding="10px" justifyContent="center">
          <BidModal />
        </Stack>
      }
    />
  );
};

export default CartaMercado;
