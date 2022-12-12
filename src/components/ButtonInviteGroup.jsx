import { Button } from '@chakra-ui/react';
import React from 'react';

import theme from '../theme';
import InviteGroupModal from './InviteGroupModal';

const ButtonInviteGroup = () => {
  return (
    <>
      <Button
        bg={theme.dark.accent3}
        color="#FFFFFF"
        variant="solid"
        marginTop="1rem"
        width="max-content"
        alignSelf="flex-end"
        onClick={<InviteGroupModal />}
      >
        Invite friends
      </Button>
    </>
  );
};

export default ButtonInviteGroup;
